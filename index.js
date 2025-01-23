import app from "./app.js"
import dotenv from 'dotenv';
import connectDb from "./config/database.js"
import { response } from "express";
dotenv.config();



connectDb();

app.get("*",(req,res)=>{
  res.sendFile("/var/www/todo/awstodo_frd/dist/index.html")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})