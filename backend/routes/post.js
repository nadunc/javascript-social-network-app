var express = require('express');

var PostController = require('../controllers/post'),
    CommentController = require('../controllers/comment'),
    LikeController = require('../controllers/like');

var router = express.Router();

// posts
router.get('/', PostController.getAllPosts);
router.post('/', PostController.addPost);
router.delete('/:id', PostController.deletePost);

// comments
router.post('/:postId/comments', CommentController.addComment);

// likes
router.post('/:postId/comments/:commentId/likes', LikeController.addLike);

module.exports = router;
