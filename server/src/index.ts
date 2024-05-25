import express, {Express} from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import financialRecordRouter from "./routes/financial-record";

const app:Express=express();
const port =process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI:string="mongodb+srv://user:user@cluster0.qyyb3ah.mongodb.net/";

mongoose.connect(mongoURI).then(()=>console.log("connected to mongodb ")).catch((err)=>console.log('failer to connect to mongodb',err));

app.use("/financial-records", financialRecordRouter);

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})

