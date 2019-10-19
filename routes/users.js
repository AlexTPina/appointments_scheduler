const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users')

/* GET ALL USERS */
router.get('/', usersController.getAllUsers)
router.post('/', usersController.addOneUser)

module.exports = router;