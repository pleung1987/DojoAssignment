// Load the express module (Where do you think this comes from?)
var express = require("express");
// invoke var express and store the resulting application in var app
var app = express();
// let's handle the base route "/" and respond with "Hello Express"
app.get('/', function(request, response) {
  response.send("<h1>Hello Express</h1>");
})


app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

                // route to process new user form data:
app.post('/users', function (req, res){
console.log("POST DATA \n\n", req.body)
                //code to add user to db goes here!
                // redirect the user back to the root route.
res.redirect('/')
});

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it


// notice that the function is app.get(...) why do you think the function is called get? We are requesting a get response.
// Tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
  console.log(__dirname);
})
// this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)
// You just created the server in your first Express app!
