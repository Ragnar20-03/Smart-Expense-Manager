import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app= express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit :"20kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// user route immports 
import userRouter from "src/routes/user.routes.js"

app.use("/api/v1/users",userRouter)
export{app};