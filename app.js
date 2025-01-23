import express from 'express';

import cors from "cors"

import taskRouter from './routers/taskRouter.js';





const app=express()
app.use(cors({
    credentials:true,
    origin:true,
}));




app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());


app.use("/api/v1/task",taskRouter);



app.use((err,req,res,next)=> {
    console.log(err.message);
});

export default app;