import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    title: {type: String, require: true},
    image: {type: String, require: true},
    content: {type: String, require: true}    
},
{
    timestamps: true
}
)

export default mongoose.model("Blog", schema)