var express = require('express');
var todoController = require('./Controllers/todoController');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets/style.css');

todoController(app);
app.listen(3000);
console.log('Welcome in the port 3000');