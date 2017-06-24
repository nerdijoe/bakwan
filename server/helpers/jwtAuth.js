const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  verifyToken: (req, res, next) => {
    jwt.verify(req.headers.token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (decoded) {
        console.log('*** jwt verify decoded');
        console.log(decoded);
        req.decoded = decoded;
        next();
      } else {
        res.send(err);
      }
    });
  },
};
