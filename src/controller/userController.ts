import userServices from "../service/userService";
import { Request, Response } from "express";


const viewAllUser = async (req: Request, res: Response) => {
  try{
    const user = await userServices.viewAllUser()
    res.json(user)
  } catch(error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

const createUser = async(req:Request, res:Response) => {
    try {
    const {username, email, password} = req.body
    const eachUser =  await userServices.createUser(username, email, password);
    res.status(201).json({
        message: "user successful created"
    })
 } 
 catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
} 

const singleUser = async(req:Request, res:Response) => {
    try {
        const id  = req.params.id
        const oneUser = await userServices.singleUser(id)
        res.send(oneUser)  
    } catch{
        res.status(404)
        res.send({error: "Sorry user doesn't exist."})
    }
}

const updateUser = async (req:Request, res:Response) => {
    try {
        const id = req.params.id
        const {username, email, password} = req.body
        const updateUser = await userServices.updateUser(id, username, email, password);
        res.json(updateUser)

        if (!updateUser) {
            console.error(`User with ID ${req.params.id} not found.`);
            res.status(404).send({ error: "Blog not found." });
        }

    } catch (error) {
        console.error(`Error updating user with ID ${req.params.id}:`, error);
        res.status(500).send({ error: "Internal Server Error." });
    }
}
    const deleteUser =  async (req:Request, res:Response) => {
        try {
         const user =   await userServices.deleteUser(req.params.id)
         if (!user) {
             return res.status(404).json({ message: 'User not found' });
            }
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ message:(error as Error).message });
        }
    };



export default {
    viewAllUser,
    createUser,
    singleUser,
    updateUser,
    deleteUser
}