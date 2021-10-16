const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
    {
        
        username:  String,
        password: String
    }
)

module.exports  =  mongoose.model("Task", taskSchema)
