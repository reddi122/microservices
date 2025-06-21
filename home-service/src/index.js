const express = require('express');
const app = express();
const PORT = 5001;

app.get('/', (req, res) => {
  res.send('Welcome to Home Service');
});

app.listen(PORT, () => {
  console.log(`Home Service running on port ${PORT}`);
});