var PostModel = require('../models/post');

exports.addLike = (req, res) => {
  var postId = req.params.postId;
  var commentId = req.params.commentId;
  var userId = req.body.user;

  //{$push:{'comments.likes':{user:userId, createdDateTime:Date.now(), updatedDateTime:Date.now()}}},{new:true},

  PostModel.findOne({ 'comments._id': commentId }, (err, post) => {
    if (err) {
      res.json({
        success: false,
        message: "Like save error.",
        error: err,
        data: null
      });
    } else {
      for (var i = 0; i < post.comments.length; i++) {
        if (post.comments[i]._id == commentId) {
          post.comments[i].likes.push({ user: userId });
          break;
        }
      }

      post.save((err, post) => {
        if (err) {
          res.json({
            success: false,
            message: "Like save error.",
            error: err,
            data: null
          });
        } else {
          PostModel.findOne({ _id: post._id }).populate('user').populate('comments.user').exec((err, post) => {
            if (err) {
              res.json({
                success: false,
                message: "Like save error",
                error: err,
                data: null
              });
            } else {
              res.json({
                success: true,
                message: "Like successfully saved.",
                data: post
              });
            }
          });
        }
      });
    }
  });
}
