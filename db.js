const mongoose = require('mongoose');
  
// MongoDB Atlas Connection
const atlasUrl = 'mongodb+srv://laxmipatil070295:laxmipatil@cluster0.cyorttz.mongodb.net/R9DB?retryWrites=true&w=majority&appName=Cluster0';


//const connection=mongoose.connect('mongodb://localhost:27017/R9DB');
const connection=mongoose.connect(atlasUrl);


mongoose.connection.on('error',err=>{
  console.log('connection failed');
});

mongoose.connection.on('connected',()=>{
  console.log('connected successfully with database');
});

 
module.exports = connection;
