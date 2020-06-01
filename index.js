var express = require ('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
    res.render('index', {
        name: 'Đây là Anh Đức học viên khóa 1 CodersX'
    })
}) 
app.get('/todos', function(req, res) {
    res.render('todos/index',{
        users: [
            {id:1, name:'Đị chợ'},
            {id: 2, name: 'Nấu cơm'},
            {id:3, name:'Rửa bác'},
            {id: 4, name: 'Học code tại codersX'}
        ]
    })
})

var port = 3000;
app.listen(port,function(){
    console.log(`Example app listening at http://localhost:${port}`)
})