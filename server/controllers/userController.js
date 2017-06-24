const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../models/user');

exports.signUp = (req, res, next) => {
  console.log('Users Signup');
  req.body.password = passwordHash.generate(req.body.password);

  User.create(req.body, (err, user) => {
    if (err) res.send(err);
    else {
      res.send(user);
    }
  });
};

exports.getUsers = (req, res, next) => {
  console.log('Users get all');
  User.find((err, users) => {
    if (err) res.send(err);
    res.send(users);
  });
};
