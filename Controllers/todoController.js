var bodyParser = require('body-parser');

var data = [{item: 'Ecouter la compagnie créole'}, {item: 'Apprendre Symfony'}, {item: 'Créer un site perso'}]
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/todo', function(req, res){
      res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, function(req, res){
      data.push(req.body);
      res.send({todos: data});
    });

    app.delete('/todo/:item', function(req, res){
      data = data.filter(function(todo){
        return todo.item.replace(/ /g, "-") !== req.params.item;
      });
      res.send(data);
    });
};