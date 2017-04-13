var mongoose = require('mongoose');

var CatSchema = new mongoose.Schema({
 name: {type: String, required: true, minlength: 2},
 type: {type: String, required: true, minlength: 2},
 color: {type: String, required: true, minlength: 2},
 gender: {type: String, required: true, minlength: 2}
}, {timestamps: true});

//setter-> sets the cat model
mongoose.model('Cat', CatSchema);
// We are setting this Schema in our Models as 'Cat'. Cat model in Mongoose looks for 'cats' in Mongo.
