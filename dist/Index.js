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
const commentRoute_1 = __importDefault(require("./routes/commentRoute"));
const likeRouter_1 = __importDefault(require("./routes/likeRouter"));
const queryRoute_1 = __importDefault(require("./routes/queryRoute"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const PORT = process.env.PORT || 5000;
// connect to the mongoDB
(0, db_1.default)();
// middlewares
app.use(express_1.default.json());
/*new routes*/
app.use('/api/v1', blogerRoute_1.default);
app.use('/api/v1', commentRoute_1.default);
app.use('/api/v1', likeRouter_1.default);
app.use('/api/v1', queryRoute_1.default);
app.use('/api/v1', userRoute_1.default);
app.use('/api/v1', authRouter_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
