var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  userName:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
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
  }
});

module.exports = mongoose.model('User', UserSchema);
