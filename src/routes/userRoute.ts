import express from 'express'
const routerUser = express.Router();
import userController from '../controller/userController';
import loginUserMiddleware from '../middlewares/loginMiddleware';

routerUser.get('/users', loginUserMiddleware, userController.viewAllUser);
routerUser.post('/users', userController.createUser);
routerUser.get('/users/:id', userController.singleUser);
routerUser.patch('/users/:id', userController.updateUser);
routerUser.delete('/users/:id',loginUserMiddleware, userController.deleteUser);


export default routerUser
