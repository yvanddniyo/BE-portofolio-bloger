import express from 'express'
const routerUser = express.Router();
import userController from '../controller/userController';
import authenticateUser from '../middlewares/userAccess';
import authenticateToken from '../middlewares/tokenAuth';
import { registerUser, loginUser } from '../controller/authController';



routerUser.get('/users',
  // authenticateToken, 
  userController.viewAllUser
);
  routerUser.post('/auth/register', 
  registerUser
);
  routerUser.post('/auth/login', 
  loginUser
);
routerUser.get('/users/:id',
  // authenticateUser, 
  userController.singleUser
);
routerUser.patch('/users/:id', 
  // authenticateToken, 
  userController.updateUser
);
routerUser.delete('/users/:id', 
  // authenticateToken, 
  userController.deleteUser
);


export default routerUser
