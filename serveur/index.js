import express from "express";
import cors from "cors";
import bodyParser from"body-parser";
import mongoose from "mongoose";

import postRoutes from './routes/posts.js';

const app = express();
app.use('/posts', postRoutes);

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

const CONNECTION_URL="mongodb+srv://newuser32:newuser32123123@cluster0.77twd.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT= process.env.PORT ||5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>console.log(`server is running on port :${PORT}`)))
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);