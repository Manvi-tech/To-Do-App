//including a express module
const express = require('express');

const db = require('./config/mongoose');
const ToDo = require('./models/todoList'); 
// DOUBT can we access this TODO in our controllers?

const app = express();
app.use(express.urlencoded()); 
const port = 8000;

app.use('/', require('./routes'));

//setting template engine:ejs
app.set('view engine','ejs');
app.set('views','./views');

//access static files from assets
app.use(express.static('assets'));

app.listen(8000,function(err){
       if(err){
           console.log("error in running a server on port: "+ port);
           return;
       }
       console.log("server is up and running on port: " + port);
});







