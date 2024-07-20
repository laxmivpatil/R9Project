const express=require('express');
const mongoose=require('mongoose');

const router=express.Router();
const EnquiryType=require('../model/enquiryType');
  
//get enquiry Type
router.get('/',(req,res,next)=>{
    EnquiryType.find()
    .select('_id type')
    .then(result=>{
        res.status(200).json({
            enquiryType:result
        })
    })
    .catch(err=>{
        console.log('error');
        res.status(500).json({
            error:err
        })
    })
});

//post enquiry type
router.post('/',(req,res,next)=>{
    console.log(req.body);
    enquiryType=new EnquiryType({
        _id: new mongoose.Types.ObjectId,
        type:req.body.type
    });
    enquiryType.save()
    .then(result=>{
        res.status(200).json({
            type:result
        })
    })
    .catch(err=>{
        console.log('error');
        res.status(500).json({
            error:err
        })
    })

})



module.exports=router;