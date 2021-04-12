
const mongoose = require('mongoose');

//connection db
mongoose.connect('mongodb://localhost/ToDoList_db');

//accesing database
const db = mongoose.connection;

//printitng error 
db.on('error',console.error.bind(console,"error connecting to DB!"));

//when connected to db
db.once('open',function(err){
    console.log("successfully connected to server");
});