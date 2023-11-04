import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from 'dotenv';
import swaggerUi from "swagger-ui-express"
import fs from"fs/promises"

const app = express()
app.use(bodyParser.json())
app.use(cors())
dotenv.config();

mongoose.set('strictQuery', true)
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.pbxpkcv.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    app.listen(process.env.PORT)
    console.log(`Server running on port ${process.env.PORT}...`)
}).catch(err => console.log(err))