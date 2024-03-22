"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerUser = express_1.default.Router();
const userController_1 = __importDefault(require("../controller/userController"));
const authController_1 = require("../controller/authController");
routerUser.get('/users', 
// authenticateToken, 
userController_1.default.viewAllUser);
routerUser.post('/auth/register', authController_1.registerUser);
routerUser.post('/auth/login', authController_1.loginUser);
routerUser.get('/users/:id', 
// authenticateUser, 
userController_1.default.singleUser);
routerUser.patch('/users/:id', 
// authenticateToken, 
userController_1.default.updateUser);
routerUser.delete('/users/:id', 
// authenticateToken, 
userController_1.default.deleteUser);
exports.default = routerUser;
