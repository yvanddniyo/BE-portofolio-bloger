"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerQuery = express_1.default.Router();
const queryController_1 = __importDefault(require("../controller/queryController"));
routerQuery.get('/queries', queryController_1.default.viewAllQuery);
routerQuery.post('/queries', queryController_1.default.createQuery);
routerQuery.delete('/queries/:id', queryController_1.default.deleteQuery);
exports.default = routerQuery;
