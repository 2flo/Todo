var express = require('express');
var todoController = require('./Controllers/todoController');
var jquery = require('jquery');
var app = express();

app.set('view engine', 'ejs');
app.use( express.static('./public'));

todoController(app);
app.listen(3000);
console.log('Welcome in the port 3000');