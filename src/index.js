import dotenv from "dotenv";
dotenv.config();

import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import connectDB from "./db/index.js";
import express from "express"
const app = express()

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("Mongo DB connection failed !!!", err)
    })



/*
import express from "express"

const app = expres()

    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERR: ", error)
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port: ${process.env.PORT}`)
            })

        } catch (error) {
            console.log("ERROR: ", error)
            throw error
        }
    })()
 */
