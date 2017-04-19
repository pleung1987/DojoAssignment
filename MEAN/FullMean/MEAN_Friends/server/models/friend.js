console.log('inside friends model');

var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
 first_name: {type: String, required: true, minlength: 2},
 last_name: {type: String, required:true,  minlength: 2},
 birthday: {type: Date, required:true}
}, {timestamps: true});

//setter-> sets the friend model
mongoose.model('Friend', FriendSchema);
// We are setting this Schema in our Models as 'Friend'. Friend model in Mongoose looks for 'friends' in Mongo.
//FriendSchema is the DB you are putting your information in
