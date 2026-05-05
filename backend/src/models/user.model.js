const mongoose = require('mongoose');

const  userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String // here no required when we use google auth
    }
},
{
    timestamps:true // it tell us when the user is created and  when it is updated in database
}
)

const userModel = mongoose.model("user" , userSchema);

 module.exports =  userModel;