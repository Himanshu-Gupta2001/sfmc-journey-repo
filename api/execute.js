module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const inArguments = req.body.inArguments[0];

    const CLOUD_PAGE_2_URL = 'https://YOUR_CLOUDPAGE2_URL'; // 🔁 Replace this

    await fetch(CLOUD_PAGE_2_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        CFP_PK: inArguments.CFP_PK || '',
        // 🔁 Add rest of your fields here
      })
    });

    res.status(200).json({ status: 'ok' });
  } catch (err) {
    console.error('Execute error:', err);
    res.status(500).json({ status: 'error', message: err.message });
  }
};
