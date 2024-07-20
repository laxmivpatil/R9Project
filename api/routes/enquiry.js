const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();



const Enquiry = require('../model/enquiry');
const EnquiryType = require('../model/enquiryType');

router.get('/', (req, res, next) => {
    console.log('hi enquiry form');
    Enquiry.find()
    .populate('enquiryType') 
        .then(result => {
            res.status(200).json({
                Enquiries: result
            })

        })
        .catch(err => {
            console.log('error');
            res.status(500).json({
                error: err
            })
        })


});


router.post('/', async (req, res, next) => {

    const { name, email, mobileno, enquiryTypeId } = req.body;

    // Check if the enquiryType exists
    const enquiryType = await EnquiryType.findById(enquiryTypeId);
    if (!enquiryType) {
        return res.status(500).json({ "message": "Enquiry Type Id not found" })
    }

    enquiry = new Enquiry({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        mobileno: req.body.mobileno,
        enquiryType: req.body.enquiryTypeId
    });

    enquiry.save()
        .then(result => {
            console.log('save');
            res.status(200).json({
                newenquiry: result
            })
        })
        .catch(err => {
            console.log('error');
            res.status(500).json({
                error: err
            })
        })



})


module.exports = router;