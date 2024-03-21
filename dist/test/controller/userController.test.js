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
const dotenv_1 = __importDefault(require("dotenv"));
const supertest_1 = __importDefault(require("supertest"));
const db_1 = __importDefault(require("../../config/db"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
dotenv_1.default.config();
describe('Data connection', () => {
    test('should connect to the database', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, db_1.default)();
    }));
});
describe('GET /', () => {
    it('getting status 200 as sucesss', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get("/api/v1/users");
        expect(response.status).toBe(200);
    }));
});
