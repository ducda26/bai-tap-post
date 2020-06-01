var express = require ('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

var todos = [
            {id:1, name:'Đị chợ'},
            {id: 2, name: 'Nấu cơm'},
            {id:3, name:'Rửa bác'},
            {id: 4, name: 'Học code tại codersX'}
        ]


app.get('/', function(req, res) {
    res.render('index', {
        name: 'Đây là Anh Đức học viên khóa 1 CodersX'
    })
}) 
app.get('/todos', function(req, res) {
    res.render('todos/index',{
        todos:todos
    })
})

app.get('/todos/search', function(req, res) {
    var q = req.query.q;
    var matchedUsers = todos.filter(function(todo){
        return todo.name.indexOf(q) !== -1;
    });
    //console.log(req.query);
    res.render('todos/index', {
        todos: matchedUsers
    });
    
})

var port = 3000;
app.listen(port,function(){
    console.log(`Example app listening at http://localhost:${port}`)
})