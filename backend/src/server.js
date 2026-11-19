import dns from 'dns';
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import dotenv from "dotenv"
import express from "express"
const app = express()
import notesRoutes from './Routes/notesRoutes.js'
import { connectDb } from "./config/db.js"
// what is an endpoint?
// an endpoint is a combination of a url + http method that lets the client interact with a specific resources
dotenv.config()
app.use(express.json())
app.use("/api/notes",notesRoutes)
connectDb()
const PORT =process.env.PORT || 5001
// bijoysaha144_db_user
// SJHMynlTdjfjjHqw
app.listen(PORT,()=>{
    console.log("Server started on port ",PORT);
    
})