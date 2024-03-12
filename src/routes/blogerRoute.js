const express = require('express');
const router = express.Router();
const userController = require('../controller/blogController'); // It lets us register the routes and use it in our application (in index.js)

router.get('/users', blogController.viewAllUser);
router.post('/users', blogController.createBlog);
router.get('/users/:id', blogController.singleBlog);
router.put('/users/:id', blogController.updateBlog);
router.delete('/users/:id', blogController.deleteBlog);

module.exports = blogRouter;

