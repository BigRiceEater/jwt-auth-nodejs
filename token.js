const jwt = require('jsonwebtoken');

module.exports = class Token {
  constructor(secret) {
    this.secret = secret;
  }

  createToken(username, expiresIn = '24h') {
    return jwt.sign({ username }, this.secret, { expiresIn });
  }

  isTokenValid(token) {
    jwt.verify(token, this.secret, (err, decoded) => {
      if (err) return { success: false, decoded: null };
      else return { success: true, decoded };
    });
  }
};
