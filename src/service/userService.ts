import Users from "../models/userModel"
import { hashedPassword } from "../utls/hashPassoword"
import jwt from 'jsonwebtoken'

const userServices = {
viewAllUser : async () =>{
    return await Users.find()
  },
createUser : async (username: string, email: string, password: string, 
    token: string) => {
    const check  = await Users.findOne({username})
     if(check) {
        throw new Error("User already exist.");
     }
     else {
        const token = jwt.sign({name: username}, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
         const hashed = await hashedPassword(password, 10)
         const newUser = new Users({username, email, password:hashed, token:token})
         return newUser.save()
     }
  },
  
singleUser: async(id:string) => {
    return await Users.findById(id)
},
updateUser: async(id:string, username:string, email:string, password:string) => {
    return await Users.findByIdAndUpdate(id, 
        {username, email, password}, {new: true}
    )
   },
deleteUser: async (id:string) => {
    return await Users.findByIdAndDelete(id)
}
}

export default userServices
