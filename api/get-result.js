// Vercel serverless function — GET /api/get-result?id=...
// Reads a previously saved Retail Readiness Score result from Upstash Redis.
//
// Requires UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN environment
// variables, set in the Vercel project settings.

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).json({ success: false, reason: 'Method not allowed' });
    return;
  }

  const id = (req.query && req.query.id) || '';
  if (!/^[A-Za-z0-9_-]{4,40}$/.test(id)) {
    res.status(200).json({ success: false, reason: 'Invalid id.' });
    return;
  }

  try {
    const upstashRes = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/pipeline`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([['GET', `score-result:${id}`]]),
    });

    if (!upstashRes.ok) {
      const errBody = await upstashRes.text();
      console.error('Upstash read error:', errBody);
      res.status(200).json({ success: false, reason: 'Could not read this result.' });
      return;
    }

    const data = await upstashRes.json();
    const raw = data?.[0]?.result;
    if (!raw) {
      res.status(200).json({ success: false, reason: 'This result is no longer available.' });
      return;
    }

    res.status(200).json({ success: true, result: JSON.parse(raw) });
  } catch (err) {
    console.error('get-result error:', err);
    res.status(200).json({ success: false, reason: 'Request failed.' });
  }
};
