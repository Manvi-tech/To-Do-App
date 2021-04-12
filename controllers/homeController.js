const db = require('../config/mongoose');
const ToDo = require('../models/todoList'); 

module.exports.home = function(req,res){
    ToDo.find({},function(err,todo){
        if(err){console.log("error fetching data from DB"); return;}
        return res.render('home.ejs',{
            todoList: todo
        });
    });
   
}


// Contact.find({},function(err,contact){
//     if(err){
//        console.log("error fetching data from DB");
//        return;
//     }
//     return res.render('contacts.ejs',{
//        contactList: contact
//     });

