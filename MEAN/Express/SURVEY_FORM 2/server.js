// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");

var bodyParser = require('body-parser');
// use it!
var app = express();
// create the express app

//bodyParser is the module that help sends post data across
app.use(bodyParser.urlencoded());
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder -> STATIC FILES FOR CSS, JS AND IMAGES
app.set('views', path.join(__dirname, './views'));
//all views will be in this view folders
app.set('view engine', 'ejs');
//tells our view folder to be ejs format
// root route to render the index.ejs view

var route = require("./routes/index.js")(app)

// app.get('/', function(req, res) {
//  res.render("index", );
// })
// // post route for adding a user
// app.post('/users', function(req, res) {
//  console.log("POST DATA", req.body);
//  // This is where we would add the user to the database
//  // Then redirect to the root route
//  res.redirect('/');
// })
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
