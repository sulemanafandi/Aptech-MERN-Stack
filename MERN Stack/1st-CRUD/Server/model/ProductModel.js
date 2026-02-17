const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    Name:String,
    Price:Number,
    Qty:Number,
    isAvaliable:Boolean
});

const ProductModel = mongoose.model('Product',ProductSchema);

module.exports = ProductModel;