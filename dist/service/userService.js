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
const userServices = {
    viewAllUser: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield userModel_1.default.find();
    }),
    createUser: (username, email, password, token) => __awaiter(void 0, void 0, void 0, function* () {
        const check = yield userModel_1.default.findOne({ username });
        if (check) {
            throw new Error("User already exist.");
        }
        else {
            const token = jsonwebtoken_1.default.sign({ name: username }, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
            const hashed = yield (0, hashPassoword_1.hashedPassword)(password, 10);
            const newUser = new userModel_1.default({ username, email, password: hashed, token: token });
            return newUser.save();
        }
    }),
    singleUser: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield userModel_1.default.findById(id);
    }),
    updateUser: (id, username, email, password) => __awaiter(void 0, void 0, void 0, function* () {
        return yield userModel_1.default.findByIdAndUpdate(id, { username, email, password }, { new: true });
    }),
    deleteUser: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield userModel_1.default.findByIdAndDelete(id);
    })
};
exports.default = userServices;
