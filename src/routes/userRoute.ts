import express from 'express'
const routerUser = express.Router();
import userController from '../controller/userController';
import authenticateUser from '../middlewares/userAccess';
import authenticateToken from '../middlewares/tokenAuth';


// import loginUserMiddleware from '../middlewares/loginMiddleware';

routerUser.get('/users',authenticateToken, userController.viewAllUser);
routerUser.post('/users', userController.createUser);
routerUser.get('/users/:id',authenticateUser, userController.singleUser);
routerUser.patch('/users/:id', authenticateToken, userController.updateUser);
routerUser.delete('/users/:id', authenticateToken, userController.deleteUser);


export default routerUser
