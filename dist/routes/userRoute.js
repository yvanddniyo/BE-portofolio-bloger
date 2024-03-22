"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controller/userController"));
const userAccess_1 = __importDefault(require("../middlewares/userAccess"));
const tokenAuth_1 = __importDefault(require("../middlewares/tokenAuth"));
const authController_1 = require("../controller/authController");
const isUserExist_1 = require("../middlewares/isUserExist");
const routerUser = express_1.default.Router();
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
routerUser.get('/users', tokenAuth_1.default, userController_1.default.viewAllUser);
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
routerUser.post('/auth/users', authController_1.registerUser);
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
routerUser.post('/auth/login', authController_1.loginUser);
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
routerUser.get('/users/:id', userController_1.default.singleUser);
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
routerUser.patch('/users/:id', tokenAuth_1.default, userController_1.default.updateUser);
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
routerUser.delete('/users/:id', tokenAuth_1.default, userController_1.default.deleteUser);
routerUser.get('/users', tokenAuth_1.default, userController_1.default.viewAllUser);
routerUser.post('/auth/register', authController_1.registerUser);
routerUser.post('/auth/login', authController_1.loginUser);
routerUser.get('/users/:id', userAccess_1.default, isUserExist_1.checkExistingUsers, userAccess_1.default, userController_1.default.singleUser);
routerUser.patch('/users/:id', tokenAuth_1.default, isUserExist_1.checkExistingUsers, userController_1.default.updateUser);
routerUser.delete('/users/:id', tokenAuth_1.default, userController_1.default.deleteUser);
exports.default = routerUser;
