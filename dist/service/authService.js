"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../models/userModel"));
const hashPassoword_1 = require("../utls/hashPassoword");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authService = {
    loginUser: (username, password) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userModel_1.default.findOne({ username });
        if (!user) {
            throw new Error("User not found.");
        }
        if (!user.password) {
            throw new Error("User password not found.");
        }
        const isPasswordValid = yield (0, hashPassoword_1.comparePassword)(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid password.");
        }
        if (!user.email) {
            throw new Error("User email not found.");
        }
        const role = user.email.endsWith('@admin.com') ? 'admin' : 'user';
        const token = jsonwebtoken_1.default.sign({ userId: user._id, role }, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', { expiresIn: '1h' });
        return { message: "Login successful", token, user: { email: user.email, username: user.username }, role };
    })
};
exports.default = authService;
