import express from 'express'
const router = express.Router();
import blogController from'../controller/blogController'; 
import authenticateToken from '../middlewares/tokenAuth';
import authenticateUser from '../middlewares/userAccess';
import upload from '../helper/multer';
import { checkExistingBlog } from '../middlewares/isBlogExist';

router.get('/blogs',
 authenticateUser,
  blogController.viewAllBlog
  );
router.post('/blogs', 
    upload.single('image'), 
    blogController.createBlog
);
router.get('/blogs/:id',  
    authenticateUser, 
    blogController.singleBlog
);
router.patch('/blogs/:id', 
    upload.single('image'), 
    authenticateToken,
    checkExistingBlog,  
    blogController.updateBlog
);
router.delete('/blogs/:id',
    authenticateToken,
    checkExistingBlog, 
    blogController.deleteBlog
);

export default router
