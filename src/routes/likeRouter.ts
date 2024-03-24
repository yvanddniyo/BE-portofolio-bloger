import express from 'express'
const router = express.Router();
import authenticateToken from '../middlewares/tokenAuth';
import authenticateUser from '../middlewares/userAccess';
import {  getLikes, like } from '../controller/likeController';

const routerLikes = express.Router();

/**
 * @swagger
 * /api/v1/blogs/{blogId}/likes:
 *   post:
 *     summary: Like a blog
 *     tags: [Likes]
 *     security:
 *       - authToken: []
 *     parameters:
 *       - in: path
 *         name: blogId
 *         schema:
 *           type: string
 *         required: true
 *         description: The blog ID
 *       - in: body
 *         name: body
 *         schema:
 *           type: object
 *           properties:
 *             userId:
 *               type: string
 *               description: The user ID
 *     responses:
 *       '200':
 *         description: Successful response
 *       '401':
 *         description: Unauthorized
 *   get:
 *     summary: Get likes for a blog
 *     tags: [Likes]
 *     security:
 *       - authToken: []
 *     parameters:
 *       - in: path
 *         name: blogId
 *         schema:
 *           type: string
 *         required: true
 *         description: The blog ID
 *       - in: body
 *         name: body
 *         schema:
 *           type: object
 *           properties:
 *             userId:
 *               type: string
 *               description: The user ID
 *     responses:
 *       '200':
 *         description: Successful response
 *       '401':
 *         description: Unauthorized
 */

routerLikes.post("/blogs/:id/likes",authenticateUser,  like);
routerLikes.get("/blogs/:id/likes",authenticateUser,   getLikes);

export default routerLikes;
