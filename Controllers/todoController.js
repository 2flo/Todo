var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://floriane_dazin:Kl@in6Forever@cluster0-lhrvg.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

var todoSchema = new mongoose.Schema({
  item: String
});
var Todo = mongoose.model('Todo', todoSchema);

//var data = [{item: 'Ecouter la compagnie créole'}, {item: 'Apprendre Symfony'}, {item: 'Créer un site perso'}]
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/todo', function(req, res){
      Todo.find({}, function(err, data){
        if (err) throw err;      
        res.render('todo', {todos: data});
      });
    });

    app.post('/todo', urlencodedParser, function(req, res){
      var newTodo = Todo.push(req.body).save(function(err, data){
        if (err) throw err;
        res.json(data);
      });
    });

    app.delete('/todo/:item', function(req, res){
      Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
        if (err) throw err;
        res.json(data);
      });
    });
};