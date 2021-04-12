

const express = require('express');
const router = express.Router();

const deletetaskController = require('../controllers/deleteTaskController');

router.get('/deletetask',deletetaskController.deleteTask);

module.exports = router;