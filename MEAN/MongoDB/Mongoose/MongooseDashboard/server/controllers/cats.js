//used for taking all the logics out of the routes

var mongoose = require('mongoose')  //need to know what mongoose is inorder to work, know that the database exists to refer
var Cat = mongoose.model('Cat') // We are retrieving this Schema from our Models, named 'Cat'

module.exports = {
    // this function should know the req and res, add it back in
    findall: function(req, res){
        Cat.find({},function(err,results){      // .find comes back in an array so thats why we can use a forloop to send as context
    // behind the hood of -> function find(object, callback){
    // inside the call back it uses the object to query the database which invoke the callback with erros and the resukt of the database
    // }
        if(err){
            console.log(err);
        }
        res.render("index",{cats: results})     //put the render index into call back so it can run without being an asychronous command
    })
},  //add commas for dictionary usage

//store a value of create a new cat into a fucntion
create: function(req,res){
    Cat.create(req.body, function(err, result){
        console.log("got to /cat route", req.body);
        var cat = new Cat(req.body);
        console.log("this is the cat variable" + cat);
        if(err){
            console.log("this is an error from trying to create:" + err);
            res.render("new", {title:'you have errors!', errors: err})       //how to do validation on a create function??
        } else {
        // console.log(req.body)   //request body with everything in a object {name:x , type:x , color: x ...}
        console.log("successfully created cat:"+ result);
            //result stores into the database through variable result
        res.redirect('/')
        }
        })
    },

//show cat
findOne: function(req,res){
    Cat.findOne({ _id: req.params.id }, function(err, result){   //params are the body in the url, body is the objects.name etc.
    // .findOne comes back as object directly and not an array
        if(err){
            console.log(err);
        } else {
            console.log("********************************");
            console.log(result);
            console.log("********************************");
            res.render("show", {cat: result})  //need to ask why response passes back an array with the particular _id cat.
        }
    });
},
editOne: function(req,res){
    Cat.findOne({ _id:req.params.id}, function(err, response){  // .findOne comes back as object directly and not an array
        if(err){
            console.log(err);
        } else{
            res.render("edit", {cat: response})
        }
    })
},

updateOne: function(req, res){
    Cat.update({ _id:req.params.id}, req.body, function(err,result){    //need to ask why needs 3 arguement 1) the url we getting(which is the id), 2) the body we are updating(req.body), 3) the call back function
        if(err){
            console.log("there is an error updating our cat:", err);
        } else {
            res.redirect('/'+ req.params.id)
        }
    })
},
destroy: function(req, res){
    Cat.remove({ _id: req.params.id }, function(err, result){
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    })
},

}
