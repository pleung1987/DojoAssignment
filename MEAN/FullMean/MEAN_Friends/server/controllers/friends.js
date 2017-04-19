console.log('got inside server side controller friends.js');

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');  //getting the collection in the model

module.exports = {
    test: function(req,res){
        res.render("test.html")
    }
  index: function(req,res){
    //your code here
    Friend.find({},function(err,results){      // .find comes back in an array so thats why we can use a forloop to send as context
    // behind the hood of -> function find(object, callback){
    // inside the call back it uses the object to query the database which invoke the callback with erros and the resut of the database
        if(err){
            res.json({message: "Error happened", error: err});
                //in our client side, we can look at message and error to see what didn't work
        } else {
            res.json({message:"Success", result: results});
                //put the render index into call back so it can run without being an asychronous command
        }
    })
  },
  create: function(req,res){
      console.log(req.body);
      Friend.create(req.body,function(err, result){
          console.log("got to /create at friends.js passing in -> ", req.body);
          var friend = new Friend(req.body);
          console.log("this is the friend variable", friend);
          if(err){
              res.json(err);
          } else {
              // console.log(req.body)   //request body with everything in a object {name:x , type:x , color: x ...}
              console.log("successfully created friend:", result);
              //result stores into the database through variable result
              res.json(result);
          }
      })
  },
  update: function(req,res){
      console.log("got into the friend update @ server-side friends.js");
    Friend.findOne({ _id:req.params.id}, function(err, friend){   //friend is the body that we need to edit
        console.log("this is the body that is updated:", req.body);
        if(err){
            console.log("there is an error updating our friend:", err);
        } else {
            friend.first_name = req.body.first_name;        //friend is the function callback that we are changing
            friend.last_name = req.body.last_name;
            friend.birthday = req.body.birthday;
            friend.save(function(err, updatedFriend){
                if(err){
                    res.json(err);
                }else{
                    res.json({message:"Success", updatedFriend: updatedFriend})
                    }
                })
            }
        })
},
  delete: function(req,res){
    //your code here
    Friend.remove({ _id: req.params.id }, function(err){
        if(err){
            res.json(err);
        }else{
            res.json({message:'Friend deleted'});
        }
    })
  },
  show: function(req,res){
    //your code here
    Friend.findOne({ _id: req.params.id }, function(err, result){   //params are the body in the url, body is the objects.name etc.
// .findOne comes back as object directly and not an array
        if(err){
            res.json(err);
        } else {
            console.log("********************************");
            console.log(result);
            console.log("********************************");
            res.json(result);  //need to ask why response passes back an array with the particular _id friend.
        }
    });
  }
}
