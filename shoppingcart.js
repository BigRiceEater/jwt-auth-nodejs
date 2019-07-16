const express = require('express');
const router = express.Router();
const authorise = require('./authorise');

router.use(authorise);

router.get('/', (req, res) => {
  res.json({
    username: req.decoded.username,
    cart: [
      {
        id: '123',
        name: 'banana'
      }
    ]
  });
});

module.exports = router;
