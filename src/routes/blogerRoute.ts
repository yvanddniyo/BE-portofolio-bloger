import express from 'express';
const router = express.Router();
import blogController from '../controller/blogController';
import authenticateToken from '../middlewares/tokenAuth';
import authenticateUser from '../middlewares/userAccess';
import upload from '../helper/multer';
import { checkExistingBlog } from '../middlewares/isBlogExist';

/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: API endpoints for managing blogs
 * components:
 *   securitySchemes:
 *     authToken:
 *       type: apiKey
 *       in: header
 *       name: auth-token
 */



/**
 * @swagger
 * components:
 *   schemas:
 *     Blog:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         username:
 *           type: string
 *         email:
 *           type: string
 *         content:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */


/**
 * @swagger
 * /api/v1/blogs:
 *   get:
 *     summary: Get all blogs
 *     tags: [Blogs]
 *     security:
 *       - authToken: []
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blog'
 *       500:
 *         description: Internal server error
 */
 
router.get('/blogs', authenticateUser,  blogController.viewAllBlog);
/**
 * @swagger
 * /api/v1/blogs:
 *   post:
 *     summary: Create a new blog
 *     tags: [Blogs]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/CreateBlogRequest'
 *     security:
 *       - authToken: []
 *     responses:
 *       '201':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       '500':
 *         description: Internal server error
 *
 * components:
 *   schemas:
 *     CreateBlogRequest:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         content:
 *           type: string
 *         image:
 *           type: string
 *           format: binary
 *     Blog:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         content:
 *           type: string
 *         imageUrl:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

router.post('/blogs', 
    authenticateToken,
    upload.single('image'), 
    blogController.createBlog
);
// router.get('/blogs/:id',  
//     authenticateUser, 
//     blogController.singleBlog
// );
// router.patch('/blogs/:id', 
//     upload.single('image'), 
//     authenticateToken,
//     checkExistingBlog,  
//     blogController.updateBlog
// );
// router.delete('/blogs/:id',
//     authenticateToken,
//     checkExistingBlog, 
//     blogController.deleteBlog
// );

/**
 * @swagger
 * /api/v1/blogs/{id}:
 *   get:
 *     summary: Get a single blog
 *     tags: [Blogs]
 *     security:
 *       - authToken: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/blogs/:id', authenticateUser, blogController.singleBlog);

/**
 * @swagger
 * /api/v1/blogs/{id}:
 *   patch:
 *     summary: Update a blog
 *     tags: [Blogs]
 *     security:
 *       - authToken: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/UpdateBlogRequest'
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       '404':
 *         description: Blog not found
 *       '500':
 *         description: Internal server error
 *
 * components:
 *   securitySchemes:
 *     authToken:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     UpdateBlogRequest:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         content:
 *           type: string
 *         image:
 *           type: string
 *           format: binary
 *     Blog:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         title:
 *           type: string
 *         content:
 *           type: string
 *         imageUrl:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
router.patch('/blogs/:id', upload.single('image'), authenticateToken, blogController.updateBlog);

/**
 * @swagger
 * /api/v1/blogs/{id}:
 *   delete:
 *     summary: Delete a blog
 *     tags: [Blogs]  
 *     security:
 *       - authToken: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Blog not found  // Update the description to reflect that it's a blog, not a user
 *       '500':
 *         description: Internal server error
 *
 * components:
 *   securitySchemes:
 *     authToken:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

router.delete('/blogs/:id', authenticateToken, blogController.deleteBlog);

export default router;
