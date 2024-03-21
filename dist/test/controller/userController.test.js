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
// import app from '../app';
const db_1 = __importDefault(require("../../config/db"));
const app_1 = __importDefault(require("../../app"));
//  const app = express()
// --coverage
//  dotenv.config()
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
describe("POST /", () => {
    test("should return status 201 for user created", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post('/api/v1/auth/register').send({
            username: "testFour",
            email: 'testFour@gmail.com',
            password: 'testFour'
        });
        expect(response.statusCode).toBe(201);
    }));
});
describe("GET /:id", () => {
    test("should return status 200 for retrieving a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const userId = "65f98774bb89bde4a2836058";
        const user = yield (0, supertest_1.default)(app_1.default).get(`/api/v1/users/${userId}`);
        expect(user.statusCode).toBe(200);
    }));
});
