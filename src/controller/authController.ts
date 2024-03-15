import { Request, Response } from "express";
import authService from "../service/authService";

const loginUser = async (req: Request, res: Response) => {
    try {
        
        const { username, password } = req.body;
        if (!username || !password) {
            throw new Error("Username and password are required.");
        }
        const eachUser = await authService.loginUser(username, password);
        res.status(201).json(eachUser);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export default loginUser;