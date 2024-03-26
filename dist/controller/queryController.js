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
const queryService_1 = __importDefault(require("../service/queryService"));
const validate_1 = require("../validate/validate");
const viewAllQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield queryService_1.default.viewAllQuery();
        res.json(query);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const createQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, message } = req.body;
        const { error } = (0, validate_1.queryValidate)({ name, email, message });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const eachquery = yield queryService_1.default.createQuery(name, email, message);
        res.status(201).json(eachquery);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const deleteQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield queryService_1.default.deleteQuery(req.params.id);
        if (!query) {
            return res.status(404).json({ message: 'query not found' });
        }
        res.json({ message: 'query deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.default = {
    viewAllQuery,
    createQuery,
    deleteQuery
};
