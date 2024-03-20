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
const userService_1 = __importDefault(require("../service/userService"));
const validate_1 = require("../validate/validate");
const viewAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userService_1.default.viewAllUser();
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const eachUser = yield userService_1.default.createUser(username, email, password);
        res.status(201).json({
            message: "user successful created"
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const singleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const oneUser = yield userService_1.default.singleUser(id);
        res.send(oneUser);
    }
    catch (_a) {
        res.status(404);
        res.send({ error: "Sorry user doesn't exist." });
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { username, email, password } = req.body;
        const { error } = (0, validate_1.userUpdateValidate)({ username, email, password });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const updateUser = yield userService_1.default.updateUser(id, username, email, password);
        res.json({
            message: "User has been updated successfully"
        });
        if (!updateUser) {
            console.error(`User with ID ${req.params.id} not found.`);
            res.status(404).send({ error: "Blog not found." });
        }
    }
    catch (error) {
        console.error(`Error updating user with ID ${req.params.id}:`, error);
        res.status(500).send({ error: "Internal Server Error." });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userService_1.default.deleteUser(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.default = {
    viewAllUser,
    createUser,
    singleUser,
    updateUser,
    deleteUser
};
