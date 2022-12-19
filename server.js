const express = require("express");
const cors = require("cors"); 
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes.js")
const app = express();
require('dotenv').config()

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.REACT_APP_MONGODBURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("DB Connected");
})
app.use("/api/user",userRoutes);

app.listen(5000, console.log("server started"))