const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const index = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', index);

const port = 3000;
app.listen(port, () => {
  console.log(`bakwan is munchin to port ${port}`);
});
