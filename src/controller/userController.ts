import userServices from "../service/userService";
import { Request, Response } from "express";
import { userUpdateValidate } from "../validate/validate";


const viewAllUser = async (req: Request, res: Response) => {
  try{
    const user = await userServices.viewAllUser()
    res.status(200).json(user)
  } catch(error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

const createUser = async(req:Request, res:Response) => {
    try {
    const {username, email, password} = req.body
    
    const eachUser =  await userServices.createUser(username, email, password);
    res.status(200).json({
        status: 201,
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
        res.status(200).send(oneUser)
    } catch{
        res.status(404)
        res.send({error: "Sorry user doesn't exist."})
    }
}

const updateUser = async (req:Request, res:Response) => {
    try {
        const id = req.params.id
        const {username, email, password} = req.body
        const {error} = userUpdateValidate({username, email, password})
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const updateUser = await userServices.updateUser(id, username, email, password);
        res.json({
            status: 200,
            message: "User has been updated successfully"
        })

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
            res.json({ 
                status: 204,
                message: 'User deleted successfully' 
            });
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