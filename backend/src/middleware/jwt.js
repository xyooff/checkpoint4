const jwt = require("jsonwebtoken");

function jwtSign(payload, options = {}) {
  return jwt.sign(payload, options);
}

function jwtVerify(token) {
  return jwt.verify(token, process.env.JWT_AUTH_SECRET);
}

module.exports = { jwtSign, jwtVerify };
