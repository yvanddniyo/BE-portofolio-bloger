import queries from "../models/QueryModel";

const queriesServices = {
    viewAllQuery : async() => {
    return await queries.find()
    },
    createQuery : async(name: string, email: string, message: string) => {
      const newQuery = new queries({name, email, message})
       return newQuery.save()
    },
    deleteQuery : async(id: string) =>{
        return await queries.findByIdAndDelete(id)
    } 
}

export default queriesServices