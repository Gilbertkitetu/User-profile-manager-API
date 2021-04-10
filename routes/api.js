const express = require('express');

//import models
const User = require('../models/user');

const router = express.Router();


//get 
router.get('/user', function(req, res, next) {
    res.send({ type: 'GET'});
});



//POST
//add  a new user to the database
router.post('/user', function(req, res, next){
    User.create(req.body).then(function(user){
    res.send(user);
}).catch(next);

});



module.exports = router;