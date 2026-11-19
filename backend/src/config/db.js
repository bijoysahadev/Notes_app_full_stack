import mongoose from 'mongoose'
 export const connectDb = async ()=>{
    try {
        await  mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(' MongoDB Connected!'));
    } catch (error) {
         console.error("Error connecting to Mongodb",error)
         process.exit(1)  //exit with failure
        
    }
}