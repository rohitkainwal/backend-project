import Dotenv from "dotenv"
import connectDB from "./db/index.js"


Dotenv.config({
    path: './env'
})

connectDB()


















/*
import express from "express"
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