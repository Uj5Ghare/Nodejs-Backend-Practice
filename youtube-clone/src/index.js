import dotenv from "dotenv"
import mongoose  from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

dotenv.config({
    path: "./env"
})


/*
const app = express()

// Using IIFE for DB connection
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("ERROR: ", (error) => {
            console.log("ERR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }

})()
*/