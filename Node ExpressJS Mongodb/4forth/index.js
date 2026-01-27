const express = require('express');
const app = express();
require('dotenv').config();
const userModel = require('./Models/UserModel');
require('./utils/connection');

app.use(express.json());

app.get('/register',async(req,res)=>{
    const {Username,Email,Password,Age} = req.body;
    await userModel.create({Username,Email,Password,Age});

    return res.status(201).send("User Registered");
});

app.listen(process.env.Port, () => console.log(`Server running on port ${process.env.Port} 🔥`));