var express = require ('express');
var app = express();

var todos = [
            {id:1, name:'Đị chợ'},
            {id: 2, name: 'Nấu cơm'},
            {id:3, name:'Rửa bác'},
            {id: 4, name: 'Học code tại codersX'}
        ]
app.set('view engine', 'pug');
app.set('views', './views');

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

app.get('/users/search', function(req, res) {
    var q = req.query.q;
    var matchedUsers = todos.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    //console.log(req.query);
    res.render('todos/index', {
        users: matchedUsers
    });
    
})

var port = 3000;
app.listen(port,function(){
    console.log(`Example app listening at http://localhost:${port}`)
})