var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = require('./comment');

var PostSchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref:'User',
    required: true
  },
  text:{
    type: String,
    required: true
  },
  createdDateTime: {
    type: Date,
    default: Date.now
  },
  updatedDateTime: {
    type: Date,
    default: Date.now
  },

  comments:[CommentSchema]
});

module.exports = mongoose.model('Post', PostSchema);
