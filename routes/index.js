const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controllers')

console.log("Router is loaded");

router.get('/', homeController.home);
router.use('/users', require('./users'));

//for any further routes access from here
//router.use('/routername', '/.routerfilename')

module.exports = router;
