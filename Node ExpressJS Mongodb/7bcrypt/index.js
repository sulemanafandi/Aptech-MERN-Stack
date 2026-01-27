const express = require('express');
const app = express();
require('dotenv').config();
require('./utils/connection');
const userModel = require('./model/UserModel');
const bcrypt = require('bcrypt')

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Register APIs
app.post('/auth/register',async(req,res)=>{
    const {Email,Password} = req.body;
    const salt = await bcrypt.genSalt(12);

    const hashedPassword = await bcrypt.hash(Password,salt);
    await userModel.create({
        Email,
        Password:hashedPassword
    });
    return res.send(`User registered !`);
})

// Login APIs

app.post('/auth/login',async(req,res)=>{
    const {Email,Password} = req.body;

    const findUser = await userModel.findOne({Email})

    if(!findUser){
        return res.status(404).send(`Invalid Credentials`);
    }

    const camparePassword = await bcrypt.compare(Password,findUser.Password);

    if(!camparePassword){
        return res.status(404).send(`Invalid Credentials`);
    }

    return res.send(`Login Successfully`);
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});