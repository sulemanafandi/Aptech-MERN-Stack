 const express = require('express');
 const app = express();
 require('dotenv').config();
require('./utils/connection');
const ProductModel = require('./model/ProductModel');
const cors = require('cors');

// ? middleware
app.use(express.json())
app.use(cors());
// Create Product
app.post('/create-Product', async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);
    res.status(201).json({ message: 'Product Created', product });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
}); 

// Read Products
app.get('/get-Product', async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json({ message: "Here are all Products", products });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
});

// Update Product
app.put('/update-Product/:id', async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: 'Product Updated', product });
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
});

// Single Product
app.get('/get-single-Product/:id',async(req,res)=>{
  try {
    const id = req.params.id;
    const product = await ProductModel.findOne({ _id: id });
    res.json({ message: 'Single Product Fetched', product });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error: error.message });
  }    
})

// Delete Product
app.delete('/delete-Product/:id', async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product Deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
});

// ? Server Runnning
 app.listen(process.env.PORT,()=>{
    console.log(`Port is running on ${process.env.PORT}`)
 });