const express = require("express")
const mongoose = require("mongoose")
const corus = require("cors")
const {usermodel}=require("./models/User.js")


const app=express()
app.use(corus())
app.use(express.json())

mongoose.connect("mongodb+srv://bristow17:bristow1904@cluster0.vn8j7z4.mongodb.net/usersdb?retryWrites=true&w=majority&appName=Cluster0")


app.listen(8080,()=>(
    console.log("server started")
))