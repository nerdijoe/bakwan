const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers);

router.post('/signup', userController.signUp);

module.exports = router;
