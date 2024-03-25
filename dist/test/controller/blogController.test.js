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
        console.log('mongo connected successfully.');
    }));
});
let token;
let adminToken;
describe("login as admin", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const loginResponse = yield (0, supertest_1.default)(app_1.default)
            .post("/api/v1/auth/login")
            .send({ "email": "adminthree@gmail.com", password: "adminthree" });
        adminToken = loginResponse.body.token;
        expect(loginResponse.status).toBe(200);
    }));
    it("should log the admin token", () => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`Admin token: ${adminToken}`);
    }));
});
describe("login in admin as POST /", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const loginResponse = yield (0, supertest_1.default)(app_1.default)
            .post("/api/v1/auth/login")
            .send({ "email": "userones@gmail.com", password: "userones" });
        token = loginResponse.body.token;
        expect(loginResponse.status).toBe(200);
    }));
});
describe("get a blogs does not exist", () => {
    it("it should retun status 404", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default).get("/api/v1/blogs")
            .set('auth-token', token)
            .expect(404);
    }));
});
describe('get blog does exist', () => {
    it('should return status 200', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default)
            .get('/api/v1/blogs')
            .set('auth-token', token)
            .expect(200);
        console.log('token gettong user :', token);
    }));
});
describe("get blog by id", () => {
    it("should return status 200 for retrieving a blog", () => __awaiter(void 0, void 0, void 0, function* () {
        const blogId = "66015bbb84cc641d59f08664";
        const user = yield (0, supertest_1.default)(app_1.default)
            .get(`/api/v1/blogs/${blogId}`)
            .set('auth-token', token);
        expect(user.status).toBe(201);
    }));
    it("should return status 200 for retrieving a blog", () => __awaiter(void 0, void 0, void 0, function* () {
        const blogId = "my_blogerId";
        yield (0, supertest_1.default)(app_1.default)
            .get(`/api/v1/blogs/${blogId}`)
            .set('auth-token', token);
        expect(404);
    }));
});
describe("delete user by id", () => {
    it("should delete status 200 for retrieving a blog", () => __awaiter(void 0, void 0, void 0, function* () {
        const blogId = "66015bad84cc641d59f08662";
        const user = yield (0, supertest_1.default)(app_1.default)
            .del(`/api/v1/blogs/${blogId}`)
            .set('auth-token', token);
        expect(user.status).toBe(200);
    }));
    it("should delete status 200 for retrieving a blog", () => __awaiter(void 0, void 0, void 0, function* () {
        const blogId = "my_blogerId";
        yield (0, supertest_1.default)(app_1.default)
            .del(`/api/v1/blogs/${blogId}`)
            .set('auth-token', adminToken);
        expect(404);
    }));
});
