const mongoose =require('mongoose');

const task_schema= new mongoose.Schema({
    description: {
        type: String,
        required : true
    },
    category: {
        type: String,
        required: true
    },
    duedate:{
        type: String,
        required: true
    }
});
const Tasks = mongoose.model('Tasks',task_schema);

module.exports = Tasks;