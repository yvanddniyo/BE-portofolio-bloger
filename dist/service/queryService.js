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
const QueryModel_1 = __importDefault(require("../models/QueryModel"));
const queriesServices = {
    viewAllQuery: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield QueryModel_1.default.find();
    }),
    createQuery: (name, email, message) => __awaiter(void 0, void 0, void 0, function* () {
        const newQuery = new QueryModel_1.default({ name, email, message });
        return newQuery.save();
    }),
    deleteQuery: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield QueryModel_1.default.findByIdAndDelete(id);
    })
};
exports.default = queriesServices;