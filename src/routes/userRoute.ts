import express from 'express';
import userController from '../controller/userController';
import authenticateUser from '../middlewares/userAccess';
import authenticateToken from '../middlewares/tokenAuth';
import { registerUser, loginUser } from '../controller/authController';
import { checkExistingUsers } from '../middlewares/isUserExist';

const routerUser = express.Router();
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for managing users
 * components:
 *   securitySchemes:
 *     authToken:
 *       type: apiKey
 *       in: header
 *       name: auth-token
 */

/**
 * @swagger
 *  /api/v1/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - authToken: []
 *     responses:
 *       200:
 *         description: Successful response
 */
routerUser.get('/users', authenticateToken, userController.viewAllUser);

/**
 * @swagger
 * /api/v1/auth/users:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       201:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserOutput'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 * components:
 *   schemas:
 *     UserInput:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         password:
 *           type: string
 *     UserOutput:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *         email:
 *           type: string
 */

routerUser.post('/auth/users', registerUser);

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput'
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */

routerUser.post('/auth/login', loginUser);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get a single user
 *     tags: [Users]
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
routerUser.get('/users/:id', userController.singleUser);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   patch:
 *     summary: Update a user
 *     tags: [Users]
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
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Successful response
 */
routerUser.patch('/users/:id', authenticateToken, userController.updateUser);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
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
routerUser.delete('/users/:id', authenticateToken, userController.deleteUser);



routerUser.get('/users',
  authenticateToken, 
  userController.viewAllUser
);
  routerUser.post('/auth/register', 
  registerUser
);
  routerUser.post('/auth/login', 
  loginUser
);
routerUser.get('/users/:id',
  authenticateUser, 
  checkExistingUsers,
  authenticateUser, 
  userController.singleUser
);
routerUser.patch('/users/:id', 
  authenticateToken,
  checkExistingUsers, 
  userController.updateUser
);
routerUser.delete('/users/:id', 
  // authenticateToken, 
  userController.deleteUser
);


export default routerUser;

