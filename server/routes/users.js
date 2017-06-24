const express = require('express');
const passport = require('passport');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers);

router.post('/signup', userController.signUp);
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn);

module.exports = router;
