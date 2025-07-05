import express from 'express';
import os from 'node:os';
const app = express();
const port = process.env.PORT || 7000;

// GET /hello → responds with a friendly message
app.get('/hello', (req, res) => {
  res.json({ message: '👋 Hello, world!' });
});

// Generic root route
app.get('/', (req, res) => {
  res.send('Welcome to Express 5 app!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
