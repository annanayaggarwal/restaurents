const express = require('express');
const multer = require("multer")
const path = require("path")
const router = express.Router();
const fs = require('fs')
const Restaurent = require('../model/restaurent');
const mongoose = require('mongoose')
// console.log(path.join(__dirname,'../uploads'))

let storage = multer.diskStorage({
    destination:(req, file,cb)=>{
        cb(null,path.join(__dirname, '../uploads'))
    },
    filename: (req, file,cb)=>{
        cb(null, file.originalname)
    }
})

let upload = multer({
    storage: storage
 })

router.get('/',(req,res,next)=>{
    Restaurent.find()
    .then(result=>{
        res.status(200).json({
            restaurentData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
})

router.post('/',upload.single('testimage'),(req,res,next)=>{
    // console.log(req.file.filename)
    const restaurent = new Restaurent({
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
         img:{
            data: fs.readFileSync(path.join(__dirname, '../uploads')+ req.file.filename),
            contentType: "image/png"
         },  
         dishes:req.body.dishes,
         rating:req.body.rating
    })

    restaurent.save()
    .then(result=>{
        console.log(result)
        res.status(200).json({
            newRestaurent:result
        })
    })

    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})




module.exports =router;