"use strict";
// import { Request, Response, NextFunction } from "express";
// // import authService from "../service/authService";
// interface AuthenticatedRequest extends Request {
//     user?: any; 
// }
// const userAuthentication = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
//     try {
//         const { username, password } = req.body;
//         if (!username || !password) {
//             throw new Error("Username and password are required.");
//         }
//         const user = await authService.loginUser(username, password);
//         if (!user) {
//             return res.status(401).json({ message: "You're not in our User." });
//         }
//         req.user = user;
//         if (user.role !== 'user') {
//             return res.status(403).json({ message: "Sorry, you are not our user." });
//         }
//         next();
//     } 
//     catch (error) {
//         res.status(500).json({ message: (error as Error).message });
//     }
// };
// export default userAuthentication;
