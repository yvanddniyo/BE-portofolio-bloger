"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const connectDB = require("./src/config/db")
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)();
const blogerRoute_1 = __importDefault(require("./routes/blogerRoute"));
const PORT = process.env.PORT || 5000;
// connect to the mongoDB
(0, db_1.default)();
// middlewares
app.use(express_1.default.json());
/*new routes*/
app.use('/api/v1', blogerRoute_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
