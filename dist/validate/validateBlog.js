"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateValidate = exports.createValidate = void 0;
const joi_1 = __importDefault(require("joi"));
const createValidate = (data) => {
    // Validation schema
    const schema = joi_1.default.object({
        title: joi_1.default.string()
            .min(6)
            .required(),
        image: joi_1.default.string()
            // .min(6)
            .required()
            .email(),
        content: joi_1.default.string()
            .min(6)
            .required(),
        role: joi_1.default.string()
    });
    return schema.validate(data);
};
exports.createValidate = createValidate;
const updateValidate = (data) => {
    // Validation schema
    const schema = joi_1.default.object({
        title: joi_1.default.string()
            .min(6)
            .email(),
        image: joi_1.default.string()
            .min(6),
        content: joi_1.default.string()
            .min(6)
    });
    return schema.validate(data);
};
exports.updateValidate = updateValidate;
