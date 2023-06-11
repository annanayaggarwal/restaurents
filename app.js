const express = require('express');
const app = express();
const adminroutes = require('./api/routes/restaurent');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const fileupload = require('express-fileupload')




mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://annanay:annanay2003@sbs.0egtqus.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log(err)
})

app.use(fileupload({
    useTempFiles:true
}))

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use('/restaurents',adminroutes)

// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:"app is running"    
//     });
   
// })

// app.use((req,res,next)=>{
//     res.status(404).json({
//         error:"bad url request"   
//     });
   
// })

module.exports = app;