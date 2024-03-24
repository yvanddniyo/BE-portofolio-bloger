import express from 'express'
const routerQuery = express.Router();
import queryController from '../controller/queryController';

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

routerQuery.get('/queries', queryController.viewAllQuery);
routerQuery.post('/queries', queryController.createQuery);
routerQuery.delete('/queries/:id',queryController.deleteQuery);


export default routerQuery