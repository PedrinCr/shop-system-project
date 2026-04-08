import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './src/routes/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.static(path.join(__dirname, 'src/public')));
app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
