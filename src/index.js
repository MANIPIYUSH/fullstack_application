
// require ('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB()













// ( async () =>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`
        
//         )
//         application.on("error",(error)=>{
//             console.log("error",error);
//             throw error
//         })
//         application.listen(process.env.PORT,()=>{
//             console.log(console.log(`App is listening on port $ {process.env.PORT}`));
//         })
//     }catch (error) {
//         console.error("Error:",error)
//         throw err
//     }
// })()