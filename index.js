const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');




//set up express app
const app = express();

//connect to mongo db
mongoose.connect('mongodb://localhost/user_profile_manager_api');

mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.get('/api', function (req, res) {
    res.send('App listening');
});

//error handling middle ware


//listen to requests
app.listen(process.env.port || 5000, function(){
    console.log("API listning for requests on port 5000");
});