const express = require('express');
const db = require('./config/mongoose');
const Tasks = require('./models/tasks');
const app = express();
const port = 8080;

// setting up view engine and views folder 
app.set('view engine', 'ejs');
app.set('views','./views');

// midleware
app.use(express.urlencoded());
app.use(express.static('assets'));

//  sending all the routes to index.js in routes
const routes = require('./routes/index')
app.use('/',routes);

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up running on port : ${port}`);
});