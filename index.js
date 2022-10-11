'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.status(200).send('Yay, I\'m working!');
});

app.get('/person/:name', (req, res) => {
  let name = req.params.name;
  res.status(200).send(`Hello ${name}!`);
});

app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});


app.listen(PORT, () => {
  console.log(`Server Active on Port: ${PORT}`);
});
