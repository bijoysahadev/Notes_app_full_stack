import dns from 'dns';
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import dotenv from "dotenv"
import express from "express"
const app = express()
import notesRoutes from './Routes/notesRoutes.js'
import { connectDb } from "./config/db.js"
import rateLimiter from './Middleware/rateLimiter.js';
// what is an endpoint?
// an endpoint is a combination of a url + http method that lets the client interact with a specific resources
dotenv.config()
// middleaware

app.use(express.json())
app.use(rateLimiter)
// middleWARE



app.use("/api/notes",notesRoutes)
const PORT =process.env.PORT || 5001
// bijoysaha144_db_user
// SJHMynlTdjfjjHqw
connectDb().then(()=>{
app.listen(PORT,()=>{
    console.log("Server started on port ",PORT);
    
})
})
