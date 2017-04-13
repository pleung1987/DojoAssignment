// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
//require mongoose to pass data and store into mongoose
var mongoose = require('mongoose')
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
// Require path
var path = require('path');

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './client/static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Use native promises to get rid of the thrown error tackle in future references
mongoose.Promise = global.Promise;

//require your mongoose.js connection
require('./server/config/mongoose.js')
//need to put model require on top before the route. It needs to know the model exists before the routes can be ran

var routes = require('./server/config/routes.js')(app);
//require a function to invoke your app functionality


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
