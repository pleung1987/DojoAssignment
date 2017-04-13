//Requiring Modules:
// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
//require mongoose to pass data and store into mongoose
var mongoose = require('mongoose')
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Require path
var path = require('path');
//You'll be calling this variable inside of all the models that require the associations.
var Schema = mongoose.Schema;

//Applying the modules
// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

//connecting our database server from express
mongoose.connect('mongodb://localhost/message_board', function(err, db){
    if(err){
        console.log("****Error creating Database****:", err);
    }
});

//Creating the Model & Schemas for Messages
var MessageSchema = new mongoose.Schema({
     name: { type: String, required: true },
     message: {type: String, required:true },
     _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
    }, { timestamps: true });
    // The 'type' property of the object inside of the array is an attribute
    // that tells Mongoose what to look for.
    // What would we need to add to make the below snippet work properly? Read your console!
mongoose.model('Message', MessageSchema); // We are setting this Schema in our Models as 'Message'. Message model in Mongoose looks for 'messages' in MongoDB's collection.
var Message = mongoose.model('Message') // We are retrieving this Schema from our Models, named 'Message'

//Creating the Model & Schemas for Comments
var CommentSchema = new mongoose.Schema({
    // since this is a reference to a different document, the _ is the naming convention!
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    name: { type: String, required: true},
    text: { type: String, required: true},
    }, {timestamps: true });

mongoose.model('Comment', CommentSchema); // We are setting this Schema in our Models as 'Comment'. Comment model in Mongoose looks for 'comments' in MongoDB's collection.
var Comment = mongoose.model('Comment') // We are retrieving this Schema from our Models, named 'Comment'

// Use native promises to get rid of the thrown error tackle in future references
mongoose.Promise = global.Promise;

//Routes goes here!
app.get("/", function(req, res){    //like django get only gets one object and .find gives back array of all the objects
    //we want to query and GET all the Message created
    Message.find({},false, true).populate('_comments').exec(function(err,messages){
        if(err){
            console.log(err);
            res.redirect('/')
        } else {
            res.render("index", {messages: messages});
        }
    })
});

app.post('/message',function(req, res){
    console.log("made it to the /create route");
    var newMessage = new Message(req.body);
    console.log(newMessage);
    newMessage.save(function(err){
        if(err){
            console.log(err);
            res.render("index", {errors: newMessage.errors})
        }else {
            console.log("succussfully saved newMessage in database");
            res.redirect('/');
        }
    })
});

app.post('/comment/:id',function(req, res){
    console.log("made it to the /comment route");
    var message_id = req.params.id
    Message.findOne({_id: message_id}, function(err, message){
        var newComment = Comment({name:req.body.name, text: req.body.comment});
        newComment._message = message._id;
        Message.update({_id: message._id},{$push: {"_comments": newComment}}, function(err){
        });
        newComment.save(function(err){
            if(err){
                console.log("this is the error from trying to create", err);
                res.render("index.ejs", {errors: newComment.errors});
            } else {
                console.log("successfully stored these data in the Database: ", result);
                res.redirect('/')
            }
        });
    });
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
