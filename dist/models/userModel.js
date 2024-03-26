"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userContainer = new mongoose_1.default.Schema({
    username: {
        type: String,
        requie: true
    },
    email: {
        type: String,
        requie: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, {
    timestamps: true
});
const userModel = mongoose_1.default.model("Users", userContainer);
exports.default = userModel;
