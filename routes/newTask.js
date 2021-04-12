
const express = require('express');
const router = express.Router();

const newtaskController = require('../controllers/newTaskController');

router.post('/newtask',newtaskController.newtask);

module.exports = router;