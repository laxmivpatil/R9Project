const mongoose = require('mongoose');

 
 
 
const {MongoClient } = require('mongodb');

// MongoDB Atlas Connection
const atlasUrl = 'mongodb+srv://laxmipatil070295:laxmipatil@cluster0.cyorttz.mongodb.net/R9DB?retryWrites=true&w=majority&appName=Cluster0';
const atlasClient = new MongoClient(atlasUrl);
console.log('Connected successfully to MongoDB Atlas');
atlasClient.connect(err => {
  if (err) {
    console.error('Failed to connect to MongoDB Atlas', err);
  } else {
    console.log('Connected successfully to MongoDB Atlas');
  }
  atlasClient.close();
});

console.log('Connected successfully to MongoDB Atlas');


//const connection=mongoose.connect('mongodb://localhost:27017/R9DB');
const connection=mongoose.connect(atlasUrl);


mongoose.connection.on('error',err=>{
  console.log('connection failed');
});

mongoose.connection.on('connected',()=>{
  console.log('connected successfully with database');
});

 
module.exports = connection;
