import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname)

import express from 'express';

const app = express();

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/codice_script.js'));
})
