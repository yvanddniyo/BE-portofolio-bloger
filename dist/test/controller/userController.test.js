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
const supertest_1 = __importDefault(require("supertest"));
const db_1 = __importDefault(require("../../config/db"));
const app_1 = __importDefault(require("../../app"));
describe('Data connection', () => {
    test('should connect to the database', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, db_1.default)();
    }));
});
describe('GET /', () => {
    it('should return status 200 and an array of users', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/api/v1/users');
        expect(response.statusCode).toBe(200);
    }));
});
describe("create new user POST /api/v1/auth/users", () => {
    it("should return status 201 for user created", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .post('/api/v1/auth/users')
            .send({
            username: "testSixx",
            email: 'testSixx@gmail.com',
            password: 'testSixx'
        });
        expect(response.statusCode).toBe(201);
    }));
});
let stringT;
describe("login in admin as POST /", () => {
    it("should return status 201 or user", () => __awaiter(void 0, void 0, void 0, function* () {
        const login = yield (0, supertest_1.default)(app_1.default)
            .post("/api/v1/auth/login")
            .send({
            email: "adminthree@gmail.com",
            password: "adminthree"
        });
        stringT = login.body.token;
        console.log(`my token is this: ${stringT}`);
        expect(login.status).toBe(200);
        // const token = await login;
        console.log(`my token is this: ${login.headers}`);
    }));
});
describe("get user by id GET /api/v1/users/:id", () => {
    it("should return status 200 for retrieving a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const userId = "65fcb7eb669ca3604c8b60b4";
        const user = yield (0, supertest_1.default)(app_1.default).get(`/api/v1/users/${userId}`);
        expect(user.statusCode).toBe(200);
    }));
});
describe("DELETE /api/v1/users/:id", () => {
    it("should return status 200 for deleting a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const userId = "65fcb7eb669ca3604c8b60b4";
        const user = yield (0, supertest_1.default)(app_1.default)
            .del(`/api/v1/users/${userId}`);
        expect(user.statusCode).toBe(200);
    }));
});
