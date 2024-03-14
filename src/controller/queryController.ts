import queriesServices from "../service/queryService";
import { Request, Response } from "express";

const viewAllQuery = async(req: Request, res: Response) => {
    try {
        const query = await queriesServices.viewAllQuery()
        res.json(query)
    }
   catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

const createQuery = async(req:Request, res:Response) => {
    try {
    const {name, email, message} = req.body
    const eachquery =  await queriesServices.createQuery(name, email, message);
    res.status(201).json(eachquery)
 } 
 catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
} 


const deleteQuery =  async (req:Request, res:Response) => {
    try {
     const query =   await queriesServices.deleteQuery(req.params.id)
     if (!query) {
         return res.status(404).json({ message: 'query not found' });
        }
        res.json({ message: 'query deleted successfully' });
    } catch (error) {
        res.status(500).json({ message:(error as Error).message });
    }
};


export default  {
  viewAllQuery,
  createQuery, 
  deleteQuery  
}