var express = require('express');
var userRoutes = require('./user');
var postRoutes = require('./post');

var router = express.Router();

// routes for user operations
router.use('/users', userRoutes);

// routes for posts, comments and likes
router.use('/posts', postRoutes);

module.exports = router;
