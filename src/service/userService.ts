import Users from "../models/userModel"
// import { hashedPassword } from "../utls/hashPassoword"
import jwt from 'jsonwebtoken'

const userServices = {
viewAllUser : async () =>{
    return await Users.find({}, '-password')
  },
createUser : async (username: string, email: string, password: string) => {
    const check  = await Users.findOne({username})
     if(check) {
        throw new Error("User already exist.");
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
