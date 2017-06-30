const express = require('express');

const itemControler = require('../controllers/itemController');

const router = express.Router();

router.get('/', itemControler.getAll);

router.post('/create', itemControler.create);

module.exports = router;
