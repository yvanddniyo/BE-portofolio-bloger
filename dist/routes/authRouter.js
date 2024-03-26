"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { authMiddleware, adminMiddleware } from '../middlewares/adminAccess';
const router = express_1.default.Router();
// router.get('/auth/admin', authMiddleware, adminMiddleware, (req, res) => {
//   res.send('Admin Dashboard');
// });
exports.default = router;
