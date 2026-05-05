const mongoose = require('mongoose');

function  connectDB() {
    mongoose.connect(process.env.MONGODB_URI)
    . then(() => {
        console.log("mongoose connected");
    }) 
    .catch((err) => {
        console.log("MongoDB connection errror:" , err);
    })
}
module.exports =  connectDB;