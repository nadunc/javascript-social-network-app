var PostModel = require('../models/post');

exports.getAllPosts = (req, res) => {
  PostModel.find().populate('user').populate('comments.user').exec((err, posts) => {
    if (err) {
      res.json({
        success: false,
        message: 'Posts retrieve error.',
        error: err,
        data: null
      });
    } else {
      res.json({
        success: true,
        message: 'Posts successfully retrieved.',
        error: err,
        data: posts
      });
    }
  });
}

exports.addPost = (req, res) => {
  var post = new PostModel(req.body);
  post.save(function (err, post) {
    if (err) {
      res.json({
        success: false,
        message: "Post save error",
        error: err,
        data: null
      });
    } else {

      PostModel.findOne({ _id: post._id }).populate('user').populate('comments.user').exec((err, post) => {        
        if (err) {
          res.json({
            success: false,
            message: "Post save error",
            error: err,
            data: null
          });
        } else {
          res.json({
            success: true,
            message: "Post successfully saved.",
            data: post
          });
        }
      });
    }
  });
}

exports.deletePost = (req, res) => {
  PostModel.remove({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.json({
        success: false,
        message: "Post delete error.",
        error: err,
        data: null
      });
    } else {
      res.json({
        success: true,
        message: "Post successfully deleted.",
        data: data
      });
    }
  });
}
