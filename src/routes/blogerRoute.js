const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController'); // It lets us register the routes and use it in our application (in index.js)

router.get('/blogs', blogController.viewAllBlog);
router.post('/blogs', blogController.createBlog);
router.get('/blogs/:id', blogController.singleBlog);
router.patch('/blogs/:id', blogController.updateBlog);
router.delete('/blogs/:id', blogController.deleteBlog);

module.exports = router;
