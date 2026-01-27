const mongoose = require('mongoose');


mongoose.connect(process.env.Conn_DB)
.then(()=>{
    console.log(`Database connected`)
})
.catch((error)=>{
    console.log('Error...',error)
})