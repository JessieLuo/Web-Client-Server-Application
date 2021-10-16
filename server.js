const express = require("express")
const https = require("https")
const Task = require("./Model/Task");
const mongoose = require("mongoose")
const cors = require("cors")



const app = express()
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())


// mongoose
mongoose.connect("mongodb://localhost:27017/DeakinDB", {useNewUrlParser: true, useUnifiedTopology: true})




let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.listen(port, (req,res)=>{
    console.log("Server is running successfullly!")
})
