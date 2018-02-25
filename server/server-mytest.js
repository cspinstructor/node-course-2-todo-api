var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

//bodyParser takes JSON string and converts to Javascript Object
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});
