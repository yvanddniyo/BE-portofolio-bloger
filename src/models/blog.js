const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title: {type: String, require: true},
    image: {type: String, require: true},
    content: {type: String, require: true}    
},
{
    timestamps: true
}
)

module.exports = mongoose.model("Blog", schema)