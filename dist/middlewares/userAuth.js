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
const authService_1 = __importDefault(require("../service/authService"));
const loginUserMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            throw new Error("Username and password are required.");
        }
        const user = yield authService_1.default.loginUser(username, password);
        if (!user) {
            return res.status(401).json({ message: "You're not in our User." });
        }
        req.user = user;
        if (user.role !== 'admin') {
            return res.status(403).json({ message: "Sorry, you are not an admin." });
        }
        next();
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.default = loginUserMiddleware;
