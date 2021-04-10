const express = require('express');

//import models
const User = require('../models/user');

const router = express.Router();


//get 
router.get('/user', function(req, res, next) {
    //res.send({ type: 'GET'});
    User.find({}).then(function(users){
        res.send(users);
    });
});



//POST
//add  a new user to the database
router.post('/user', function(req, res, next){
    User.create(req.body).then(function(user){
    res.send(user);
}).catch(next);

});

//update a user 
router.put('/user/:id', function(req, res, next){
User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(){
    User.findOne({ _id: req.params.id }).then(function(user){
        res.send(user);
    });
});
});


//delete a user
router.delete('/user/:id', function(req, res, next) {
    User.findByIdAndRemove({ _id: req.params.id }).then(function(user){
        res.send(user);
    });
});

module.exports = router;