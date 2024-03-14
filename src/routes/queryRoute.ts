import express from 'express'
const routerQuery = express.Router();
import queryController from '../controller/queryController';

routerQuery.get('/queries', queryController.viewAllQuery);
routerQuery.post('/queries', queryController.createQuery);
routerQuery.delete('/queries/:id',queryController.deleteQuery);


export default routerQuery