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
const userServices = {
    viewAllUser: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield userModel_1.default.find();
    }),
    createUser: (username, email, password) => __awaiter(void 0, void 0, void 0, function* () {
        const check = yield userModel_1.default.findOne({ username });
        if (check) {
            throw new Error("User already exist.");
        }
        else {
            // const token = jwt.sign({name: username}, "process.env.JWT_TOKEN")
            //  const hashed = await hashedPassword(password, 10)
            //  const newUser = new Users({username, email, password:hashed})
            //  return newUser.save();
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
