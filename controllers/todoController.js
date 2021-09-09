const Tasks = require('../models/tasks');

// controller for rendering the main page

module.exports.render = function(req,res){
        Tasks.find({},function(err,tasks){
            if(err){
                console.log('Error in fetching tasks from db');
                return;
            }
            return res.render('index',{
                task_list : tasks
            });
        });
    }

// controller for adding new task to database

module.exports.add=function(req,res){
    console.log('new task added');
    Tasks.create({
        description:req.body.description,
        category:req.body.category,
        duedate:req.body.duedate
    },function(err,newTask){
        if(err){
            console.log("error in creating a task");
            return;
        }
        // console.log('********',newTask);
        return res.redirect('back');
    });
}

//controller for deleting task

module.exports.delete=function(req,res){
    // console.log(req.body.checkbox);
    for(let id of req.body.checkbox){
        // console.log(id);
        Tasks.findByIdAndDelete(id,function(err){
            if(err){
                console.log('Error in deleting an object from database');
                return;
            }
            else
                console.log('deleted ',id);
        });
    }
    return res.redirect('back');
}


// module.exports.delete=function(req,res){
//     console.log(id);
//     Tasks.remove({'_id':{'$in':uidArray}},function(err){
//         if(err){
//             console.log('Error in deleting an object from database');
//             return;
//         }
//         return res.redirect('back');
//     }); 
// }