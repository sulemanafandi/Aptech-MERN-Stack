const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.get('/user', (req, res) => {
    res.send('Hello World!');
});

app.get("/product-user", (req, res) => {
  const products=[
    {id:1, name:"laptop", price:45000},
    {id:2, name:"mobile", price:25000},
    {id:3, name:"tablet", price:15000},
  ];
  res.json({message:"Product list", products});
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});