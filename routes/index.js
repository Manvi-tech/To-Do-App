
const express = require('express');
const router = express.Router();

// controller for '/' route
const home_Controller = require('../controllers/homeController');
router.get('/',home_Controller.home);

//using other routers to create and delte tasks
router.use('/create',require('./newTask'));
router.use('/remove',require('./deleteTask'));

module.exports = router;


