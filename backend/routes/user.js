var express = require('express');

var UserController = require('../controllers/user');

var router = express.Router();

router.get('/', UserController.getAllUsers);
router.post('/', UserController.addUser);
router.get('/search/:keyword', UserController.searchUser);

module.exports = router;
