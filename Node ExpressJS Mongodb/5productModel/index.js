const express = require('express');
const app = express();
require('dotenv').config();
require('./utils/connection');
const ProductModel = require('./model/productModel');

app.use(express.json());

app.post('/product',async (req,res)=>{
    const {Name,Quantity,Price,Color} = req.body;
    await ProductModel.create({Name,Quantity,Price,Color});

    res.status(201).send('Product Successfully added');
})

app.get('/get-product',async (req,res)=>{
    const retrive_Product = await ProductModel.find();
    res.status(200).json({message:"Here all Product retrive",retrive_Product})
})

app.listen(process.env.PORT, () => 
    console.log(`Server running on port ${process.env.PORT} `
))