const express = require('express');
const router = express.Router()
const userRoute = require('../controller/userController')

// Define routes for handling user-related operations
router.get('/users', userController.viewAllUser);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.singleUser);
// router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;