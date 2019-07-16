const jwt = require('jsonwebtoken');
const secret = require('./secret');

function validateUserToken(req, res, next) {
  console.log(req.headers);
  let token = extractTokenFromRequest(req);
  console.log('server received token', token);
  if (!token) {
    res.sendStatus(401);
    return;
  }

  token = removeBearerFromStr(token);

  jwt.verify(token, secret.jwt, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: 'Token is not valid'
      });
    } else {
      req.decoded = decoded;
      next();
    }
  });
}

const extractTokenFromRequest = req => {
  const token = req.headers['x-access-token'] || req.headers['authorization'];
  return token;
};
const removeBearerFromStr = token => token.replace('Bearer ', '');

module.exports = validateUserToken;
