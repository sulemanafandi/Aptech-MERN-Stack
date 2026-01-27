 const express = require('express');
 const app = express();
 require('dotenv').config();
require('./utils/connection');
const ProductModel = require('./model/ProductModel');

app.use(express.json())

app.post('/create-Product',async(req,res)=>{
    await ProductModel.create(req.body);
    res.status(201).send('Product Created');
});

app.get('/get-Product',async(req,res)=>{
    const products = await ProductModel.find();
    res.json({message:"Here are all Product",products});
});

app.put('/update-Product/:id',async(req,res)=>{
    const id = req.params.id;
    await ProductModel.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    );
    res.send('Product Updated');
})

app.delete('/delete-Product/:id',async(req,res)=>{
    const id = req.params.id;
    await ProductModel.findByIdAndDelete(id)
    res.send('Product Deleted');
})

 app.listen(process.env.PORT,()=>{
    console.log(`Port is running on ${process.env.PORT}`)
 });