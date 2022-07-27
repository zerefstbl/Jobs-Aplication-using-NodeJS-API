import dotenv from 'dotenv';
dotenv.config()

import { router } from './routes';

import express from 'express';
const app = express();

app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log('Server stated on port 8000!')
})