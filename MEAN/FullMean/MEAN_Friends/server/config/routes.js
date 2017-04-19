console.log("got into routes.js");
var mongoose = require('mongoose')
//getter -gets the Friend model
var Friend = mongoose.model('Friend') // We are retrieving this Schema from our Models, named 'Friend'
var friends = require('./../controllers/friends.js')  //requiring the dictionary of friends.js

var path = require('path');

//when we invoke it, we need to tell the function what the app is
module.exports = function(app){

    app.get('/friends', function(req, res) {
      friends.index(req, res);
    });
    app.get('/friends/:id', function(req, res) {
      friends.show(req, res);
    });
    app.post('/friends', function(req, res) {
        console.log("got into the /friends route from route.js");
        console.log(req.body);      //turns into undefined when passed by http.post
      friends.create(req, res);
    });
    app.put('/friends/:id', function(req, res) {
        console.log("this is the req.body at the server route update:", req.body);
      friends.update(req, res);
    });
    app.delete('/friends/:id', function(req, res) {
        console.log("this is the req.body at the server route delete:", req.body);
      friends.delete(req, res);
    });
};
