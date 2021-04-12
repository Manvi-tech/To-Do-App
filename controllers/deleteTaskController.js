const db = require('../config/mongoose');
const ToDo = require('../models/todoList'); 

module.exports.deleteTask = function(req,res){
    
    let id = req.query.id;
    ToDo.findByIdAndDelete(id,function(err){
        if(err){console.log("error in deleting task"); return;}
        return res.redirect('back');
    });
  
}

//delete a contact request
// app.get('/delete-Contact/',function(req,res){
//     let id = req.query.id;
//     Contact.findByIdAndDelete(id,function(err){
//          if(err){
//             console.log("error in deleting a contact");
//             return;
//          }
//          return res.redirect('back');
//     });
 
//  });