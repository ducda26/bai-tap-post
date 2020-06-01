var express = require ('express');
var app = express();
const bodyParser = require('body-parser') //body

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) //body for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) //body for parsing application/x-www-form-urlencoded

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
        return todo.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    //console.log(req.query);
    res.render('todos/index', {
        todos: matchedUsers
    });
    
})

app.get('/todos/create', function(req, res) {
    res.render('todos/create')
})

app.post('/todos/create', function(req, res) {
    todos.push(req.body);
    res.redirect('/todos') // sau khi phan hoi ve lai trang index
    // res.render('users/create')
})



app.listen(port,function(){
    console.log(`Example app listening at http://localhost:${port}`)
})