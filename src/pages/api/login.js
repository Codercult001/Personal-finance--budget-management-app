import axios from 'axios';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'POST') {
    try {
      const response = await axios.post('http://localhost:5000/api/signup', req.body);
      res.status(201).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
