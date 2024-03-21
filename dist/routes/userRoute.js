"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerUser = express_1.default.Router();
const userController_1 = __importDefault(require("../controller/userController"));
const userAccess_1 = __importDefault(require("../middlewares/userAccess"));
const tokenAuth_1 = __importDefault(require("../middlewares/tokenAuth"));
const authController_1 = require("../controller/authController");
const isUserExist_1 = require("../middlewares/isUserExist");
routerUser.get('/users', 
// authenticateToken, 
userController_1.default.viewAllUser);
routerUser.post('/auth/register', authController_1.registerUser);
routerUser.post('/auth/login', authController_1.loginUser);
routerUser.get('/users/:id', userAccess_1.default, isUserExist_1.checkExistingUsers, userController_1.default.singleUser);
routerUser.patch('/users/:id', tokenAuth_1.default, isUserExist_1.checkExistingUsers, userController_1.default.updateUser);
routerUser.delete('/users/:id', tokenAuth_1.default, userController_1.default.deleteUser);
exports.default = routerUser;
