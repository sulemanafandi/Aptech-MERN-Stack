 
const mongoose = require('mongoose');


mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log(`DB Successfully Connected`)
})
.catch(()=>{
    console.log(`DB Connection Failed`)
})