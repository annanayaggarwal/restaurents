const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    img:{
        data:Buffer,
        contentType:String
    },
    
    dishes:Number,
    rating:Number
})

module.exports = mongoose.model('Restaurent',adminSchema);