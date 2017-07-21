var PostModel = require('../models/post');

exports.addComment = (req, res) => {
  var postId = req.params.postId;
  var comment = req.body;

  PostModel.findOneAndUpdate({ _id: postId }, { $push: { comments: comment } }, { new: true }, (err, post) => {
    if (err) {
      res.json({
        success: false,
        message: "Comment save error.",
        error: err,
        data: null
      });
    } else {
      PostModel.findOne({ _id: post._id }).populate('user').populate('comments.user').exec((err, post) => {
        if (err) {
          res.json({
            success: false,
            message: "Comment save error",
            error: err,
            data: null
          });
        } else {
          res.json({
            success: true,
            message: "Comment successfully saved.",
            data: post
          });
        }
      });
    }
  });
}
