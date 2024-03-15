import express from 'express'
const routerAuth = express.Router();
import loginUser from '../controller/authController';
// import authenticateAndAuthorize from '../controller/authController';

routerAuth.post('/auth/login', loginUser);

export default routerAuth