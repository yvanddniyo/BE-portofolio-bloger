import express from 'express'
const router = express.Router();
import blogController from'../controller/blogController'; 
import authenticateToken from '../middlewares/tokenAuth';
import authenticateUser from '../middlewares/userAccess';
import {  getLikes, like } from '../controller/likeController';


router.get('/blogs', authenticateUser, blogController.viewAllBlog);
router.post('/blogs', authenticateToken, blogController.createBlog);
router.get('/blogs/:id', authenticateUser, blogController.singleBlog);
router.patch('/blogs/:id', authenticateToken,  blogController.updateBlog);
router.delete('/blogs/:id',authenticateToken, blogController.deleteBlog);

export default router
