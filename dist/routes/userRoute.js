"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerUser = express_1.default.Router();
const userController_1 = __importDefault(require("../controller/userController"));
const loginMiddleware_1 = __importDefault(require("../middlewares/loginMiddleware"));
routerUser.get('/users', loginMiddleware_1.default, userController_1.default.viewAllUser);
routerUser.post('/users', userController_1.default.createUser);
routerUser.get('/users/:id', userController_1.default.singleUser);
routerUser.patch('/users/:id', userController_1.default.updateUser);
routerUser.delete('/users/:id', loginMiddleware_1.default, userController_1.default.deleteUser);
exports.default = routerUser;
