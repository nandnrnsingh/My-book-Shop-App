

import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"


import bookRoute from  "./route/book.route.js"
import userRout from "./route/user.route.js"


dotenv.config();
const app = express()
app.use(cors());
app.use(express.json());


const port = process.env.PORT || 4000;

const DB_URL = process.env.mongoURL;

mongoose.connect(DB_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("DB connected successfully");
})
.catch(err => console.log(err));

//defining routes
app.use("/nandapi" , bookRoute);
app.use("/nandapi" , userRout);


app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})