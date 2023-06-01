const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: [true, "Please Enter restaurant Name"]
    },
    
    img:{
        data:Buffer,
        contentType:String
    },

    dishes:{
        type:Number,
        required:[true]
    },

    rating:{
        type:Number,
        required:[true],
        maxLength:[5,"maximum 5 star rating"],
        minLength:[1,"wrong rating"]
    }
})

module.exports = mongoose.model('Restaurent',adminSchema);