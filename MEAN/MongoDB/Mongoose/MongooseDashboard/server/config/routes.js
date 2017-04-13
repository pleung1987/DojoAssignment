var mongoose = require('mongoose')

//getter -gets the cat model
var Cat = mongoose.model('Cat') // We are retrieving this Schema from our Models, named 'Cat'
var cats = require('./../controllers/cats.js')  //requiring the dictionary of cats.js

//when we invoke it, we need to tell the function what the app is
module.exports = function(app){

//Routes goes here!
app.get("/", function(req, res){    //like django get only gets one object and .find gives back array of all the objects
    //we want to query and GET all the cat created
    cats.findall(req,res);
});

app.post("/cat", function(req, res){
    cats.create(req,res);   //calling back the create function at cats.js @ controller
})
//create cat
app.get("/create", function(req, res){
    res.render("new");
})
//show cat
app.get('/:id', function(req, res){
    cats.findOne(req,res);
});

app.get('/:id/edit/',function(req, res){
    cats.editOne(req,res);
});

app.post('/:id', function(req, res){    //the ':' is just a placeholder, it will search for anything
    cats.updateOne(req,res);
});
//delete cat
app.post('/:id/delete',function(req,res){
    cats.destroy(req,res);
});

}
