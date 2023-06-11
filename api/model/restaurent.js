const mongoose = require('mongoose');
// const validator = require('validator')

const adminSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: [true, "Please Enter restaurant Name"]
    },

    dishes:{
        type:Number,
        required:[true]
    },

    rating:{
        type:Number,
    },
    img:{
        type:String
    }
})

module.exports = mongoose.model('Restaurent',adminSchema);