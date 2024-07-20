const mongoose = require('mongoose');


const connection=mongoose.connect('mongodb://localhost:27017/R9DB');


mongoose.connection.on('error',err=>{
  console.log('connection failed');
});

mongoose.connection.on('connected',()=>{
  console.log('connected successfully with database');
});

 
module.exports = connection;
