var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LikeSchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref:'User',
    required: true
  },
  createdDateTime: {
    type: Date,
    default: Date.now
  },
  updatedDateTime: {
    type: Date,
    default: Date.now
  }
});

module.exports = LikeSchema;
