
const db = require('../config/mongoose');
const ToDo = require('../models/todoList'); 

module.exports.newtask = function(req,res){
    
    ToDo.create(req.body,function(err,newtask){
        if(err){console.log("error creating a task"); return;}
        console.log(newtask);
        return res.redirect('back');
    });
    
}

// adding a new contact request
// app.post('/Contact_list',function(req,res){
//       Contact.create(req.body,function(err,newContact){
//       if(err){console.log("error creating a contact"); return;}
//       console.log("********", newContact);
//       return res.redirect('back');
//     });
    
// });
