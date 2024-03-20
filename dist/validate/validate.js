"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createValidate = exports.loginValidate = exports.registerValidate = void 0;
const joi_1 = __importDefault(require("joi"));
const registerValidate = (data) => {
    const schema = joi_1.default.object({
        username: joi_1.default.string()
            .min(6)
            .required(),
        email: joi_1.default.string()
            .min(6)
            .required()
            .email(),
        password: joi_1.default.string()
            .min(6)
            .required(),
        role: joi_1.default.string()
    });
    return schema.validate(data);
};
exports.registerValidate = registerValidate;
const loginValidate = (data) => {
    const schema = joi_1.default.object({
        email: joi_1.default.string()
            .min(6)
            .required()
            .email(),
        password: joi_1.default.string()
            .min(6)
            .required()
    });
    return schema.validate(data);
};
exports.loginValidate = loginValidate;
const createValidate = (data) => {
    const schema = joi_1.default.object({
        title: joi_1.default.string()
            .min(6)
            .required(),
        image: joi_1.default.string()
            .optional(),
        content: joi_1.default.string()
            .required()
            .min(10)
    });
    return schema.validate(data);
};
exports.createValidate = createValidate;
