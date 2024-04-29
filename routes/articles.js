const express = require('express');
const router = express.Router();
const controller = require('../controllers/articles');

router.get('/', controller.list);

router.get('/:id', controller.index);

router.post("/", controller.create);

module.exports = router;