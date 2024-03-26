"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function authenticateToken(req, res, next) {
    const token = req.header('auth-token') || '';
    if (!token) {
        res.status(401).json({
            message: "You're not logged in"
        });
        return;
    }
    try {
        const verified = jsonwebtoken_1.default.verify(token, `${process.env.JWT_TOKEN}`);
        console.log('Verified payload:', verified);
        req.user = verified;
        // Check if the user is an admin
        if ((req.user.role || '').trim().toLowerCase() !== 'admin') {
            res.status(403).json({
                message: "Unauthorized: Only admins can perform this action"
            });
            return;
        }
        next();
    }
    catch (err) {
        res.status(400).send("Invalid token");
    }
}
exports.default = authenticateToken;
