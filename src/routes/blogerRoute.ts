import express from 'express'
const router = express.Router();
import blogController from'../controller/blogController'; 

router.get('/blogs', blogController.viewAllBlog);
router.post('/blogs', blogController.createBlog);
router.get('/blogs/:id', blogController.singleBlog);
router.patch('/blogs/:id', blogController.updateBlog);
router.delete('/blogs/:id', blogController.deleteBlog);


export default router
