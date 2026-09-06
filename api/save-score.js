// Vercel serverless function — POST /api/save-score
// Sets retail_readiness_score on a HubSpot contact directly via the Contacts API.
// Requires a HUBSPOT_SERVICE_KEY environment variable (HubSpot Service Key,
// crm.objects.contacts.write scope). Never expose this token client-side.

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, reason: 'Method not allowed' });
    return;
  }

  const { email, score } = req.body || {};
  if (!email || score === undefined) {
    res.status(400).json({ success: false, reason: 'Provide both email and score.' });
    return;
  }

  try {
    const hsRes = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(email)}?idProperty=email`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.HUBSPOT_SERVICE_KEY}`,
        },
        body: JSON.stringify({
          properties: { retail_readiness_score: String(score) },
        }),
      }
    );

    if (hsRes.status === 404) {
      // Contact doesn't exist yet — likely a timing race with the separate HubSpot
      // form submission. Create it directly instead of depending on that call's timing.
      const createRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.HUBSPOT_SERVICE_KEY}`,
        },
        body: JSON.stringify({
          properties: { email, retail_readiness_score: String(score) },
        }),
      });

      if (!createRes.ok) {
        const errBody = await createRes.text();
        console.error('HubSpot contact create error:', errBody);
        res.status(200).json({ success: false, reason: 'Could not create contact record.' });
        return;
      }

      res.status(200).json({ success: true, created: true });
      return;
    }

    if (!hsRes.ok) {
      const errBody = await hsRes.text();
      console.error('HubSpot contact update error:', errBody);
      res.status(200).json({ success: false, reason: 'Could not update contact record.' });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('save-score error:', err);
    res.status(200).json({ success: false, reason: 'Request failed.' });
  }
};
