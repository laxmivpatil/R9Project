const mongoose=require('mongoose');
enquirytypeSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    type:String
})

module.exports=mongoose.model('enquiryType',enquirytypeSchema);
