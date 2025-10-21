import Dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express"


const app = express();
Dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port : $ {process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO  db connection failed !!!", err)
})

















/*
import express from "express"
import { express } from 'ex';
const app = express()

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", ()=>{
            console.log("ERRR:", error);
            throw error
        })

        app.listen(process.env.PORT, () =>{
            console.log(`App is listning on port $ {process.env.PORT}`);
        })


    } catch (error) {
        console.error("Error:" ,error)
        throw err
    }
})() */