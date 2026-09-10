// Vercel serverless function — POST /api/save-result
// Persists a completed Retail Readiness Score result in Upstash Redis and
// returns a short id so the result can be revisited at /score/{id}.
//
// Requires UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN environment
// variables, set in the Vercel project settings. Create a free database at
// https://upstash.com

const crypto = require('crypto');

const TTL_SECONDS = 60 * 60 * 24 * 90; // 90 days

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, reason: 'Method not allowed' });
    return;
  }

  const { brand, websiteUrl, total, bandLabel, pillarTotals, pillarRows, good, bad, fix } = req.body || {};
  if (typeof total !== 'number' || !Array.isArray(pillarRows)) {
    res.status(400).json({ success: false, reason: 'Missing or invalid result data.' });
    return;
  }

  const id = crypto.randomBytes(9).toString('base64url');
  const record = { brand, websiteUrl, total, bandLabel, pillarTotals, pillarRows, good, bad, fix, savedAt: Date.now() };

  try {
    const upstashRes = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/pipeline`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([['SET', `score-result:${id}`, JSON.stringify(record), 'EX', String(TTL_SECONDS)]]),
    });

    if (!upstashRes.ok) {
      const errBody = await upstashRes.text();
      console.error('Upstash save error:', errBody);
      res.status(200).json({ success: false, reason: 'Could not save this result.' });
      return;
    }

    const data = await upstashRes.json();
    if (data?.[0]?.result !== 'OK') {
      console.error('Upstash save unexpected response:', data);
      res.status(200).json({ success: false, reason: 'Could not save this result.' });
      return;
    }

    res.status(200).json({ success: true, id });
  } catch (err) {
    console.error('save-result error:', err);
    res.status(200).json({ success: false, reason: 'Request failed.' });
  }
};
