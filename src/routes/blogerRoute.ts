import express from 'express'
const router = express.Router();
import blogController from'../controller/blogController'; 
import loginUserMiddleware from '../middlewares/loginMiddleware';


router.get('/blogs', blogController.viewAllBlog);
router.post('/blogs', loginUserMiddleware, blogController.createBlog);
router.get('/blogs/:id', blogController.singleBlog);
router.patch('/blogs/:id', loginUserMiddleware, blogController.updateBlog);
router.delete('/blogs/:id', loginUserMiddleware, blogController.deleteBlog);


export default router
