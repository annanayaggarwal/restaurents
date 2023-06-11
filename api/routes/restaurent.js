const express = require('express');
const multer = require("multer")
const path = require("path")
const router = express.Router();
const fs = require('fs')
const Restaurent = require('../model/restaurent');
const mongoose = require('mongoose')
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name:'dg1xhktqb',
    api_key:'433192356885685',
    api_secret:'g-OU-XyRikK-vkiToaf-Fdx1vUE'

})
// console.log(path.join(__dirname,'../uploads'))

// let storage = multer.diskStorage({
//     destination:(req, file,cb)=>{
//         cb(null,path.join(__dirname, '../uploads'))
//     },
//     filename: (req, file,cb)=>{
//         cb(null, file.originalname)
//     }
// })

// let upload = multer({
//     storage: storage
//  })

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
// ,upload.single('testimage')
router.post('/',(req,res,next)=>{
    const file = req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
        console.log(result);
        // console.log(req.file.filename)
        const restaurent = new Restaurent({
            _id:new mongoose.Types.ObjectId,
            name:req.body.name,
            dishes:req.body.dishes,
            rating:req.body.rating,
            img:result.url
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
})





module.exports =router;