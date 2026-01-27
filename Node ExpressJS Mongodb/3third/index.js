const express = require('express');
const app = express();
require('dotenv').config();


const Port = process.env.PORT || 3000;

app.use(express.json());

app.get("/home", (req, res) => {
   res.send("Home Page Successfully Run");
});

app.get("/get-user/:id", (req, res) => {
    const id = req.params.id;
   res.json({message:"Here is the User Id",id});
});

app.get("/search", (req, res) => {
    const search = req.query.search || "";
    const limit = req.query.limit || 10;
   res.json({message:"Search Query Received",search,limit});
});

app.post("/create-user", (req, res) => {
    const {Email, password,username} = req.body;
   res.json({message:"User Created Successfully",Email,password,username});
});

app.listen(Port, () => console.log(`Server running on Port ${Port} 🔥`));
