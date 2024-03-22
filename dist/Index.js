"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
// import hfhfhf from "../../Blogger/src/routes/*.ts"
const app = (0, express_1.default)();
const blogerRoute_1 = __importDefault(require("./routes/blogerRoute"));
const commentRoute_1 = __importDefault(require("./routes/commentRoute"));
const likeRouter_1 = __importDefault(require("./routes/likeRouter"));
const queryRoute_1 = __importDefault(require("./routes/queryRoute"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const PORT = process.env.PORT || 5000;
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'REST API OF BLOG',
            version: '1.0.0'
        },
        securitySchemes: {
            headerAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'auth-token',
            },
        },
        servers: [
            {
                url: 'http://localhost:5000'
            },
            {
                url: 'https://be-portofolio-bloger.onrender.com'
            },
        ],
    },
    apis: [`${__dirname}/routes/*.js`]
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
(0, db_1.default)();
// middlewares
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
/*new routes*/
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.use('/api/v1', blogerRoute_1.default);
app.use('/api/v1', commentRoute_1.default);
app.use('/api/v1', likeRouter_1.default);
app.use('/api/v1', queryRoute_1.default);
app.use('/api/v1', userRoute_1.default);
app.use('/api/v1', authRouter_1.default);
// requesting image
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
