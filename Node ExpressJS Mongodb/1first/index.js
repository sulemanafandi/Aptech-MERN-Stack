const express = require('express');
const app = express();

app.get('/',(req,res)=> res.send("<h1>Wellcome Home Page</h1>"));

app.get('/about',(req,res)=> res.send("<h1>Wellcome to About Page</h1>"))


app.get('/page/contact',(req,res)=> res.send("<h1>Wellcome to Contact Page</h1>"))

app.get('/register',(req,res)=> res.send(`<h2>Register</h2> <form action="/register" method="POST"> <input type="text" name="fullname" placeholder="Full Name" required> <input type="email" name="email" placeholder="Email Address" required> <input type="text" name="username" placeholder="Username" required> <input type="password" name="password" placeholder="Password" required> <input type="password" name="confirmPassword" placeholder="Confirm Password" required> <button type="submit">Sign Up</button>`))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));