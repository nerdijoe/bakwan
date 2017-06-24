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
  console.log('Users getUsers');
  User.find((err, users) => {
    if (err) res.send(err);
    res.send(users);
  });
};

exports.signIn = (req, res, next) => {
  console.log('Users signIn');
  const user = req.user;
  console.log(`user signing in as: ${user}`);

  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
    },
    process.env.TOKEN_SECRET,
    { expiresIn: '1h' }
  );

  const userObj = {
    _id: user._id,
    name: user.name,
    username: user.username,
    email: user.email,
    token,
  };

  console.log('returning this user Object: ', userObj);
  res.send(userObj);
};
