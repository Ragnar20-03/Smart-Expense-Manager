import {Router} from "express"
import { upload } from "../middlewares/multer.middleware.js";
import { addExpense, categoryWiseAmount, categoryWiseExpense, getExpenses, updateExpense,getExpendAmount, deleteExpense } from "../controllers/expense.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const expenseRoute=Router();

expenseRoute.route("/add-expense")
.post(
    verifyJWT,
    upload.fields([{
        name:"bill_photo",
        maxCount:1
    }]),
    addExpense);

expenseRoute.route("/update-expense/:id").put(verifyJWT,updateExpense)
expenseRoute.route("/delete-expense/:id").delete(verifyJWT,deleteExpense)
expenseRoute.route("/all-expenses").get(verifyJWT,getExpenses);

expenseRoute.route("/categoryWise-amount").get(verifyJWT,categoryWiseAmount);
expenseRoute.route("/categoryWise-expenses").get(verifyJWT,categoryWiseExpense);
expenseRoute.route("/expended-amount").get(verifyJWT,getExpendAmount);


export default expenseRoute