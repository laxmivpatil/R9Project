const express=require('express');
const app=express();

const enquiryTypeRoute=require('./api/routes/enquiryType');
const enquiryRoute=require('./api/routes/enquiry');

const bodyParser= require('body-parser');
const { urlencoded, json}=require('body-parser');
const cors= require('cors');

const mongoose = require('./db');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors());

app.use('/enquirytype',enquiryTypeRoute);
app.use('/enquiry',enquiryRoute);


app.get('/', (req, res) => {
    res.send('Hello World!');
  });

module.exports=app;