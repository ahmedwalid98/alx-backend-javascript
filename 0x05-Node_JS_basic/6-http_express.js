const express = require('express');

const app = express();

app.route('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(1245);