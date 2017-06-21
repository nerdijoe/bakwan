var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var index = require('./routes/index')

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/', index)

const port = 3000;
app.listen( port, () => {
  console.log(`bakwan is munchin to port ${port}`);
})
