const mongoose = require('mongoose');

//connect to db
mongoose.connect('mongodb://localhost/todo_list_db');

//acquiree the connection
const db = mongoose.connection;

//if error
db.on('error', console.error.bind(console,'error connecting to db'));

//up and running
db.once('open',function(){
    console.log('Succesfully connected to database');
});