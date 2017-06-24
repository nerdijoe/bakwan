const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const index = require('./routes/index');
const users = require('./routes/users');

const app = express();

const mongodbConfig = {
  development: 'mongodb://localhost/bakwan_dev',
  test: 'mongodb://localhost/bakwan_test',
};

const appEnv = app.settings.env;
mongoose.connect(mongodbConfig[appEnv], (err, res) => {
  console.log(`connected to mongoDB: ${mongodbConfig[appEnv]}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', index);
app.use('/api/users', users);

const port = 3000;
app.listen(port, () => {
  console.log(`bakwan is munchin to port ${port}`);
});
