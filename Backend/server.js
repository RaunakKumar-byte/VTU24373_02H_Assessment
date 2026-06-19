require("dotenv").config();
const express=require("express");
const cors=require("cors");
const taskRoutes=require("./routes/taskRoutes");
const connectDB=require("./config/db");



const app=express();


connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT=process.env.PORT || 5000;






app.use("/tasks",taskRoutes);



app.listen(PORT,()=>{
    console.log(`server is runing on port no ${PORT}`);
})