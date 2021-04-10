const express = require('express');
const bodyParser = require('body-parser');



//set up express app
const app = express();


app.get('/api', function (req, res) {
    res.send('App listening');
});


app.listen(process.env.port || 5000, function(){
    console.log("API listning for requests on port 5000");
});