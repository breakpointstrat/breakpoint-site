// Vercel serverless function — POST /api/score-site
// Accepts { url } to fetch and score a live website, OR { text } to score pasted copy directly
// (used as the fallback when a site can't be fetched, e.g. Amazon/Walmart listings).
//
// Requires an ANTHROPIC_API_KEY environment variable set in your Vercel project settings.
// Get a key at https://console.anthropic.com
//
// Deploy this file at the project's /api/score-site.js so the site's fetch('/api/score-site')
// call (see Score.dc.html) resolves to it on the same domain.

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, reason: 'Method not allowed' });
    return;
  }

  const { url, text: pastedText } = req.body || {};
  let contentText;
  let mediaSignal = '';

  if (pastedText && pastedText.trim().length > 50) {
    contentText = pastedText.trim().slice(0, 6000);
  } else if (url) {
    if (!/^https?:\/\//i.test(url)) {
      res.status(200).json({ success: false, reason: 'Please enter a valid URL starting with http:// or https://' });
      return;
    }
    let html;
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);
      const pageRes = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
        },
        signal: controller.signal,
      });
      clearTimeout(timeout);
      if (!pageRes.ok) {
        res.status(200).json({ success: false, reason: `That site returned an error (${pageRes.status}) — we couldn't read it directly.` });
        return;
      }
      html = await pageRes.text();
    } catch (err) {
      res.status(200).json({ success: false, reason: "We couldn't reach that site — it may be blocking automated access (common with Amazon/Walmart listings)." });
      return;
    }

    const imgTags = html.match(/<img\s[^>]*>/gi) || [];
    const videoTags = html.match(/<video[\s\S]*?<\/video>/gi) || [];
    const imgsWithAlt = imgTags.filter(tag => /alt\s*=\s*"[^"]{3,}"/i.test(tag)).length;
    mediaSignal = `\n\nMedia detected on this page: ${imgTags.length} image elements (${imgsWithAlt} with descriptive alt text), ${videoTags.length} video elements. Note: this count may be low for pages that load images dynamically via JavaScript.`;

    contentText = html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;|&amp;|&quot;|&#39;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 6000);

    if (contentText.length < 200) {
      res.status(200).json({ success: false, reason: 'Not enough readable content found on that page.' });
      return;
    }
  } else {
    res.status(400).json({ success: false, reason: 'Provide either a url or text field.' });
    return;
  }

  const prompt = `You are scoring a consumer brand's website or product copy for retail readiness. Score two dimensions on a 0-20 scale each:

1. DIGITAL SHELF & CONTENT READINESS (0-20): How complete, specific, and proof-backed is the product/brand content? Reward specific claims, certifications, ingredient/material data, and testing results. Also factor in the media signal provided below — a product page with strong photo/video support scores meaningfully higher than one with little or none; heavily penalize near-zero images for what appears to be a product or e-commerce page. Penalize vague marketing language with no substantiation.

2. AI & SEARCH DISCOVERABILITY (0-20): How likely is this content to be confidently and accurately cited by an AI shopping assistant (like ChatGPT or Perplexity) answering a category question? Reward clear, specific, well-substantiated claims, named certifications, structured comparisons, and descriptive image alt text (which AI systems also read). Penalize vagueness an AI system couldn't confidently repeat.

Content to evaluate:
"""
${contentText}
"""
${mediaSignal}

Now identify two things: STRENGTHS and GAPS. This is the part scoring tools most often get wrong, so read these examples carefully before answering.

STRENGTHS: specific, genuine positives — proof points, certifications, or content quality that would give a retail buyer or an AI assistant real confidence. Only include things that are actually strong. If nothing stands out, return an empty array — do not manufacture a strength.

GAPS: specific things that are missing, weak, unsubstantiated, or would concern a retail buyer. For each gap, also give a specific, actionable FIX — the concrete next step to close that exact gap. Name the specific thing to add, get, or change — not generic advice like "improve your content."

WRONG for a gap (this is a strength, not a gap, even though specific and true):
- "Strong nutritional transparency: detailed macro breakdowns and gluten-free status are clearly listed"

RIGHT for a gap + fix pair:
- gap: "Gluten-free claim stated but not substantiated with third-party certification" / fix: "Get GFCO certification and add the certification badge next to the claim"
- gap: "No packaging or label shot — only lifestyle imagery" / fix: "Add a straight-on product/label photo so a shopper can verify exactly what they're buying"

A gap is something a retail buyer would flag as a problem, not something they'd compliment. Do not soften a strength into something that merely sounds critical, and do not invent a fix for a gap that doesn't genuinely exist. If the content is strong across the board, gapsAndFixes should be an empty array.

Respond with ONLY valid JSON, no markdown formatting, no code fences, in exactly this shape:
{"pillar1Score": <integer 0-20>, "pillar3Score": <integer 0-20>, "highlight": "<one sentence, in your own words, naming one SPECIFIC thing found in this content that supports the scores>", "strengths": ["<specific genuine strength — may be an empty array>"], "gapsAndFixes": [{"gap": "<specific genuine gap>", "fix": "<specific actionable fix for that exact gap>"}]}`;

  try {
    const aiRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 800,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!aiRes.ok) {
      const errBody = await aiRes.text();
      console.error('Anthropic API error:', errBody);
      res.status(200).json({ success: false, reason: 'Scoring service is unavailable right now — try again shortly.' });
      return;
    }

    const aiData = await aiRes.json();
    const raw = aiData?.content?.[0]?.text || '';
    const cleaned = raw.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(cleaned);

    const clamp = (n) => Math.max(0, Math.min(20, Math.round(Number(n) || 0)));

    res.status(200).json({
      success: true,
      pillar1Score: clamp(parsed.pillar1Score),
      pillar3Score: clamp(parsed.pillar3Score),
      highlight: parsed.highlight || '',
      strengths: Array.isArray(parsed.strengths) ? parsed.strengths.filter(s => typeof s === 'string').slice(0, 3) : [],
      gapsAndFixes: Array.isArray(parsed.gapsAndFixes)
        ? parsed.gapsAndFixes
            .filter(g => g && typeof g.gap === 'string' && typeof g.fix === 'string')
            .slice(0, 3)
        : [],
    });
  } catch (err) {
    console.error('Scoring error:', err);
    res.status(200).json({ success: false, reason: 'Scoring failed — please try again in a moment.' });
  }
};
