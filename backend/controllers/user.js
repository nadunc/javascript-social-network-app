var UserModel = require('../models/user'),
    md5 = require('md5');

exports.getAllUsers = (req, res)=>{
  UserModel.find((err, users)=>{
    if(err){
      res.json({
        success: false,
        message: 'Users retrieve error.',
        error: err,
        data: null
      });
    }else{
      res.json({
        success: true,
        message: 'Users successfully retrieved.',
        error: err,
        data: users
      });
    }
  });
};

exports.addUser = (req, res)=>{
  var user = new UserModel(req.body);
  user.password = md5(user.password);

  user.save((err, user)=>{
    if(err){
      res.json({
        success: false,
        message: 'Users save error.',
        error: err,
        data: null
      });
    }else{
      res.json({
        success: true,
        message: 'Users sucessfully saved.',
        error: err,
        data: user
      });
    }
  });
};

exports.searchUser = (req, res)=>{
  var keyword = req.params.keyword;
  // var regex = new RegExp('^'+keyword+'$', 'i');
  var regex = new RegExp(keyword, 'i');

  UserModel.find({$or:[{firstName : regex}, {lastName : regex}, {userName : regex}]}, 'firstName lastName userName', (err, users)=>{
    if(err){
      res.json({
        success: false,
        message: 'Users search error.',
        error: err,
        data: null
      });
    }else{
      res.json({
        success: true,
        message: 'Users search sucessfull.',
        error: err,
        data: users
      });
    }
  });
};
