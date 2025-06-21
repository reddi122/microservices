const express = require('express');
const app = express();
const PORT = 5003;

app.get('/', (req, res) => {
  res.send('Welcome to Fashion Service');
});

app.listen(PORT, () => {
  console.log(`Fashion Service running on port ${PORT}`);
});