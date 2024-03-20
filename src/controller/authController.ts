import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import dotenv from "dotenv"
import { registerValidate, loginValidate } from "../validate/validate"

dotenv.config()

export const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { error } = registerValidate(req.body);
        if (error) {
            res.status(400).send(error.details[0].message);
        } 
        else {
            const existEmail = await userModel.findOne({ email: req.body.email });
            if (existEmail) {
                res.status(400).json({ message: "email already exists" });
            } else {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(req.body.password, salt);

                const user = new userModel({
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedPassword,
                    role: req.body.role
                });
                const newUser = await user.save();
                res.status(200).json({ 
                    message: "user successfully created an account.",
                 });
            }
        }
    } catch (err: any) {
        res.status(500).send(err.message);
    }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { error } = loginValidate(req.body);
        if (error) {
            res.status(400).send(error.details[0].message);
            return;
        }

        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            res.status(400).json({ message: "Email doesn't exist in our DB" });
            return;
        }

        if (!user.password) {
            res.status(400).json({ message: "Password not found for the user" });
            return;
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            res.status(400).send("Password is invalid");
            return;
        }

        // Include the user's role in the JWT token payload
        const payload = {
            id: user._id,
            email: user.email,
            role: user.role
        };

        const token = jwt.sign(payload, `${process.env.JWT_TOKEN}`);
        res.header('auth-token', token).send(token);
    } catch (err: any) {
        res.status(500).send(err.message);
    }
};

