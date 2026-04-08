import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/register.html'));
});

router.post('/register', (req, res) => {
  res.send({ message: 'Registered!' });
});

export default router;
