const express = require('express');
const cors = require('cors');
const Token = require('./token');
const secret = require('./secret');
const app = express();
const port = 4030;
const shoppingCartRouter = require('./shoppingcart');

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});

app.use(cors());

app.get('/guest-token', (req, res) => {
  const token = new Token(secret.jwt).createToken('guest');
  res.json({
    success: true,
    message: 'Guest Token generated',
    token
  });
});

app.use('/cart', shoppingCartRouter);
