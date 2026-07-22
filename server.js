import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI= process.env.GEMINI; // Key disimpen di.env

app.post('/api/chat', async (req, res) => {
  try {
    const { contents } = req.body;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents })
      }
    );

    const data = await response.json();
    res.json(data);

  } catch (error) {
    res.status(500).json({ error: 'Proxy Error' });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Proxy running di http://localhost:${PORT}`));
