import express from "express";
import "dotenv/config";
import connectDB from "./db.js";
import restaturantmodel from "./restaturantModel.js";
import menuitems from "./itemsModel.js";

const app=express();
const port=process.env.port;
connectDB();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Api is working");
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});