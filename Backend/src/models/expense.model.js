import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            lowercase:true,
            required:true,
            trim:true,
            // unique:true,
        },
        owner:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:true,
            lowercase:true,
        },
        amount:{
            type:Number,
            required:true,
        },
        date:{
            type:Date,
            required:true
        },
        bill_photo:{
            type:String,
        },
        description:{
            type:String
        }
    }
    , { timestamps: true });

export const Expense = new mongoose.model("Expense", expenseSchema);