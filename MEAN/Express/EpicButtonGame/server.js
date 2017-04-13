// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})

//This creates the io variable which we are going to use to control our sockets
// Server and our port listener come first, the io variable and require socket statement
// second, and last we'll have the io.sockets.on line as seen in the below snippet:

// Whenever a connection event happens (the connection event is built in) run the following code
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var route = require("./routes/index.js")(app, server);
