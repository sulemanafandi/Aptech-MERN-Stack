const express = require('express');
const app = express();
require('dotenv').config();
require('./utils/connection');
const UserModel = require('./models/UserModel');
const jwt = require('jsonwebtoken');

app.use(express.json());

// Register APIs
app.post('/register',async(req,res)=>{
    await UserModel.create(req.body);
    return res.status(201).send(`User registered`);
});

// Login APIs
app.post('/login',async(req,res)=>{
    const {Email,Password} = req.body;
    const findUser = await UserModel.findOne({Email:Email});

    if(!findUser){
        return res.status(404).send(`Invaild Credential`);
    }

    const findUserbyPassword = await UserModel.findOne({Password:Password});

    if(!findUserbyPassword){
        return res.status(404).send(`Invaild Credential`);
    }

    const token = jwt.sign(
        {
            userId:findUser._id,
            role:findUser.Role,
            email:findUser.Email
        },process.env.JWT_SECRET,{expiresIn:'3d'});

        return res.status(200).json({message:'User Loggin In', token});
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
