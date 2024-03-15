"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerAuth = express_1.default.Router();
const authController_1 = __importDefault(require("../controller/authController"));
// import authenticateAndAuthorize from '../controller/authController';
routerAuth.post('/auth/login', authController_1.default);
exports.default = routerAuth;
