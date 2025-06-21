const express = require('express');
const app = express();
const PORT = 5002;

app.get('/', (req, res) => {
  res.send('Welcome to Cart Service');
});

app.listen(PORT, () => {
  console.log(`Cart Service running on port ${PORT}`);
});