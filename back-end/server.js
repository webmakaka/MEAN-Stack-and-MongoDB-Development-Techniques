var express = require('express');
var app =  express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var auth = require('./controllers/auth');
var message = require('./controllers/message');
var checkAuthenticated = require('./services/checkAuthenticated');
var cors = require('./services/cors');

app.use(bodyParser.json());
app.use(cors);



app.get('/api/message', message.get);
app.post('/api/message', checkAuthenticated, message.post);

app.post('/auth/login', auth.login);
app.post('/auth/register', auth.register);



mongoose.connect("mongodb://localhost:27017/test", function(err, db){
    if(!err){
        console.log("We are connected to mongo");
    } else {
        console.log("Can't connect to mongo");
    }
});

var server = app.listen(9000, function(){
    console.log('listening on port ', server.address().port)
});
