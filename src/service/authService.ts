import Users from "../models/userModel";
import { comparePassword } from "../utls/hashPassoword";
import jwt from 'jsonwebtoken';

const authService = {
    loginUser: async (username: string, password: string) => {
         const user = await Users.findOne({ username });
         if (!user) {
             throw new Error("User not found.");
         }
         
         if (!user.password) {
             throw new Error("User password not found.");
         }
 
         const isPasswordValid =  await comparePassword(password, user.password);
         if (!isPasswordValid) {
             throw new Error("Invalid password.");
         }
 
         if (!user.email) {
            throw new Error("User email not found.");
        }
        const role = user.email.endsWith('@admin.com') ? 'admin' : 'user';

        const token = jwt.sign({ userId: user._id, role }, 'process.env.JWT_TOKEN', { expiresIn: '1h' });

        return { message: "Login successful", token, user: { email: user.email, username: user.username }, role };
    }
 };


export default authService;