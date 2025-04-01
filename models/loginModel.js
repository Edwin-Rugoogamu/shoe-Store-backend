const mongoose = require("mongoose")
// const passportLocalMongoose = require("passport-local-mongoose")
// const bcrypt = require("bcrypt");
const logInModel = mongoose.Schema({
    username:{
        type:String,
        trim:true,
        default:null,
    },
    email:{
        type:String,
        trim:true,
        default:null,
    },
    firstName:{
        type: String,
        trim:true,
        default:null,
    },
    secondName:{
        type: String,
        trim:true,
        default:null,
    },
    location:{
        type: String,
        trim:true,
        default:null,
    },
    confirmPassword:{
        type:String,
        trim:true,
        default:null,
    },
    password:{
        type:String,
        trim:true,
        default:null,
    },
    passwordHash:{
        type:String,
        trim:true,
        default:null,
    },
    gender:{
        type:String,
        trim:true,
    },userGroup:{
        default:"client",
        type:String,
        trim:true,
    },number:{
        type:String,
        trim:true,
        default:null,
    },
  
}) 

// logInModel.plugin(passportLocalMongoose,);
module.exports = mongoose.model('Login',logInModel);