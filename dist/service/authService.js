"use strict";
// import Users from "../models/userModel";
// // authService.ts
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv"
// dotenv.config()
// export const loginUser = {
// login : async (email: string, password: string) => {
//     // Find user by email
//     const user = await Users.findOne({ email });
//     // If user doesn't exist
//     if (!user) {
//         throw new Error("Email doesn't exist in our DB");
//     }
//     // Ensure user.password is not null or undefined
//     if (!user.password) {
//         throw new Error("User password not found.");
//     }
//     // Validate password
//     const validPassword = await bcrypt.compare(password, user.password);
//     if (!validPassword) {
//         throw new Error("Invalid password");
//     }
//     // Create a JWT token
//     const role = user.email!.endsWith('@admin.com') ? 'admin' : 'user'; // Ensure user.email is not null or undefined
//     const key = process.env.JWT_TOKEN
//     if(!key) {
//         throw new Error("no key found");
//     }
//     else {
//         console.log(key);
//     }
//     const token = jwt.sign({ _id: user._id, role },key , { expiresIn: '1000s' }); // Ensure process.env.JWT_TOKEN is not null or undefined
//     return {
//         message: "Login successful",
//         token,
//         user: { email: user.email, username: user.username },
//         role
//     };
// }};
