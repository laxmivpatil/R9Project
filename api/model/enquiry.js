const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  mobileno: String,
  enquiryType: { type: mongoose.Schema.Types.ObjectId, ref: 'enquiryType' }  // Reference to enquirytype
},{
     timestamps: true  // This will add `createdAt` and `updatedAt` fields
        });

const Enquiry = mongoose.model('enquiry', enquirySchema);
module.exports = Enquiry;