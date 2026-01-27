const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    Name:String,
    Quantity:Number,
    Price:Number,
    Color:String
});

const ProductModel = new mongoose.model('Product',ProductSchema);

module.exports = ProductModel;