var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LikeSchema = require('./like');

var CommentSchema = new Schema({
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
  likes:[LikeSchema]
});

module.exports = CommentSchema;
