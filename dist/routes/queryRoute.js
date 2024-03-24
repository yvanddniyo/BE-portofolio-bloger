"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerQuery = express_1.default.Router();
const queryController_1 = __importDefault(require("../controller/queryController"));
/**
 * @swagger
 * components:
 *   schemas:
 *     QueryRequest:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - message
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         message:
 *           type: string
 *     Query:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         message:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
/**
 * @swagger
 * /api/v1/queries:
 *   get:
 *     summary: Get all queries
 *     tags: [Queries]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Query'
 *       500:
 *         description: Internal server error
 *   post:
 *     summary: Create a new query
 *     tags: [Queries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/QueryRequest'
 *     responses:
 *       201:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Query'
 *       500:
 *         description: Internal server error
 *
 * /api/v1/queries/{id}:
 *   delete:
 *     summary: Delete a query
 *     tags: [Queries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Successful response
 *       404:
 *         description: Query not found
 *       500:
 *         description: Internal server error
 */
routerQuery.get('/queries', queryController_1.default.viewAllQuery);
routerQuery.post('/queries', queryController_1.default.createQuery);
routerQuery.delete('/queries/:id', queryController_1.default.deleteQuery);
exports.default = routerQuery;
