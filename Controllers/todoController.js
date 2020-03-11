var bodyParser =require('body-parser');

var data = [{item: 'Ecouter la compagnie créole'}, {item: 'Apprendre Symfony'}, {item: 'Créer un site perso'}]
var urlencodedParser = bodyParser.urlencoded({extended: true});
module.exports = function(app){
    app.get('/todo', function(req, res){
      res.render('todo', {todos: data});
    });
    app.post('/todo', urlencodedParser, function(req, res){
      data.push(req.body);
      res.json({todos: data});
    });
    app.delete('/todo', function(req, res){

    });
};