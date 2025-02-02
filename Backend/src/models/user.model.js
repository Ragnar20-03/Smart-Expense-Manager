import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
        index:true
    },
    fullname:{
        type:String,
        required:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true
    },
    avator:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:[true,"Password is Required"],
    },
    BudgetAmount:{
        type:Number,
        required:true,
    },
    expenseAmount:{
        type:Number,
    },
    refreshToken:{
        type:String,
    }

},{timestamps:true});

export const User=new mongoose.model("User",userSchema);