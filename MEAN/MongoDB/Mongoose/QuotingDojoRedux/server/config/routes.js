var mongoose = require('mongoose');
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

//We wrap the routes in a function where we can pass in the app as a parameter so that we can set up our
//routing rules in the routes.js file.
module.exports = function(app){
    app.get("/", function(req, res){
            res.render("index")
            // when we get into the main root, we want to render the index ejs file, it will listen to the get request
            //and render the file put in the parameter.
        })

    app.post('/quotes', function(req, res) {
      console.log("POST DATA", req.body);
      // create a new User with the name and age corresponding to those from req.body
      var user = new User({name: req.body.name, quote: req.body.quote});
      // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
      user.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
          console.log('something went wrong');
            res.render('index',{title:'you have errors!', errors: user.errors})
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully added a user and quotes!');
          res.redirect("/quotes");        //gets to the app.get /quotes route
        }
      })
    })

    app.get('/quotes', function(req, res) {
        User.find({}, function(err, users) {        //first parameter determines the query objects specifics, if left empty {} determines looking for everything.
            if(err){
                console.log("Can't load data from server");
                res.redirect('/')
            } else{
                res.render("quotes", {user: users});
            }
        }).sort({createdAt:-1}) //-1 is descending, 1 is assending
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    })
}
