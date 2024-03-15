import Users from "../models/userModel"
import bcrypt from "bcrypt"

export const  hashedPassword =  async(password: string, saltRounds: number) => {
    const hashed = await bcrypt.hash(password, 10)
    return hashed
}

export const comparePassword =  async (password:string, hashedPassword: string) => {
    const comp = await bcrypt.compare(password, hashedPassword)
    return comp;
}