import { asyncHandler } from "../utils/asyncHandler";
import { Expense } from "../models/expense.model";
import { ApiError } from "../utils/ApiError";
import { uploadOnCloudinary } from "../utils/cloudinary";

const addExpense=asyncHandler(async (req,res)=>{
    // get data from user
    const {title,date,category,amount,description}=req.body;

    // check all fields are come or not  
    if([title,date,category,amount,description].some((field)=>field?.trim()==="")){
        throw new ApiError(400,"All fields are required ! ");
    }

    // upload bill photo on cloudinary 
    const billPhotoLocalPath=req.file?.bill_photo?.[0].path;
    const billPhoto=uploadOnCloudinary(billPhotoLocalPath);

    // create expense user and upload it on Database

})
