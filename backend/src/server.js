import dns from 'dns';
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import cors from "cors"
import dotenv from "dotenv"
import express from "express"
const app = express()
import notesRoutes from './Routes/notesRoutes.js'
import { connectDb } from "./config/db.js"
import rateLimiter from './Middleware/rateLimiter.js';
import path from 'path';
// what is an endpoint?
// an endpoint is a combination of a url + http method that lets the client interact with a specific resources
dotenv.config()

if(process.env.NODE_ENV !=="production") {
app.use(cors({
    origin:"http://localhost:5173",
}))
}

// middleaware


// app.use(cors())
app.use(express.json());
const PORT =process.env.PORT || 5001
const __dirname=path.resolve()
// Rate limiter comes AFTER cors
app.use(rateLimiter);
// middleWARE



app.use("/api/notes",notesRoutes)

// bijoysaha144_db_user
// SJHMynlTdjfjjHqw
if(process.env.NODE_ENV ==="production") {
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
app.get("/{*splat}",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
})
}
connectDb().then(()=>{
app.listen(PORT,()=>{
    console.log("Server started on port ",PORT);
    
})
})
