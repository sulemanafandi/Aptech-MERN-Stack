 const mongoose = require('mongoose');

 mongoose.connect(process.env.DB_Conn)
 .then(()=>{
    console.log(`Database Connected`);
 })
 .catch((err)=>{
    console.log(`Database Failed ${err}`)
 })