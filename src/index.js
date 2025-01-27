import dotenv from "dotenv"
import connectDB from "./db/index.db.js"
import { app } from "./app.js"

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at port ${process.env.PORT},DB connected successfully`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})





  
      // "headers": [
    //   {
    //     "source": "/api/(.*)",
    //     "headers": [
    //       {
    //         "key": "Access-Control-Allow-Origin",
    //         "value": "https://actionote-project.vercel.app/"
    //       },
    //       {
    //         "key": "Access-Control-Allow-Methods",
    //         "value": "GET, POST, PUT, DELETE, OPTIONS"
    //       },
    //       {
    //         "key": "Access-Control-Allow-Headers",
    //         "value": "Content-Type, Authorization"
    //       }
    //     ]
    //   }
    // ]