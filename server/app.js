const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const passwordHash = require('password-hash');

const User = require('./models/user');

const index = require('./routes/index');
const users = require('./routes/users');
const items = require('./routes/items');

const app = express();

const mongodbConfig = {
  development: 'mongodb://localhost/bakwan_dev',
  test: 'mongodb://localhost/bakwan_test',
};

const appEnv = app.settings.env;
mongoose.connect(mongodbConfig[appEnv], (err, res) => {
  console.log(`connected to mongoDB: ${mongodbConfig[appEnv]}`);
});

passport.use(new Strategy(
  (username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) return done(err);
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      if (!passwordHash.verify(password, user.password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', index);
app.use('/api/users', users);
app.use('/api/items', items);

const port = 3000;
app.listen(port, () => {
  console.log(`bakwan is munchin to port ${port}`);
});
