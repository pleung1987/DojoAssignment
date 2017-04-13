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

//connecting our database server from express
mongoose.connect('mongodb://localhost/quoting_dojo');

var UserSchema = new mongoose.Schema({
 name: {type: String, required: true, minlength: 2},
 quote: {type: String, required: true, maxlength: 50}
}, {timestamps: true});

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'

app.use(bodyParser.urlencoded({ extended: true }));
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
// Use native promises
mongoose.Promise = global.Promise;

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
