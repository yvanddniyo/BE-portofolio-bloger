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
exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = __importDefault(require("../models/userModel"));
const dotenv_1 = __importDefault(require("dotenv"));
const validate_1 = require("../validate/validate");
dotenv_1.default.config();
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = (0, validate_1.registerValidate)(req.body);
        if (error) {
            res.status(400).send(error.details[0].message);
        }
        else {
            const existEmail = yield userModel_1.default.findOne({ email: req.body.email });
            if (existEmail) {
                res.status(400).json({ message: "email already exists" });
            }
            else {
                const salt = yield bcrypt_1.default.genSalt(10);
                const hashedPassword = yield bcrypt_1.default.hash(req.body.password, salt);
                const user = new userModel_1.default({
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedPassword,
                    role: req.body.role
                });
                const newUser = yield user.save();
                res.status(200).json({
                    message: "user successfully created.",
                });
            }
        }
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = (0, validate_1.loginValidate)(req.body);
        if (error) {
            res.status(400).send(error.details[0].message);
            return;
        }
        const user = yield userModel_1.default.findOne({ email: req.body.email });
        if (!user) {
            res.status(400).json({ message: "Email doesn't exist in our DB" });
            return;
        }
        if (!user.password) {
            res.status(400).json({ message: "Password not found for the user" });
            return;
        }
        const validPassword = yield bcrypt_1.default.compare(req.body.password, user.password);
        if (!validPassword) {
            res.status(400).send("Password is invalid");
            return;
        }
        // Include the user's role in the JWT token payload
        const payload = {
            id: user._id,
            email: user.email,
            role: user.role
        };
        const token = jsonwebtoken_1.default.sign(payload, `${process.env.JWT_TOKEN}`);
        res.header('auth-token', token).send(token);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
exports.loginUser = loginUser;
