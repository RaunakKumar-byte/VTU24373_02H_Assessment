const Task=require("../models/Task");


const getTasks = async(req, res)=>{
    try{
        const tasks=await Task.find().sort({ createdAt: -1});
        res.status(200).json(tasks);
    }catch(error){
        res.status(500).json({
            message: error.message,
        });
    }
};





const createTasks = async(req, res)=>{
    try{
        const {title, description, status}=req.body;

        if(!title || !description){
            return res.status(400).json({
                message: "Title and description are required",
            });
        }

        const task =await Task.create({
            title,
            description,
            status
        })
        res.status(201).json(task);
    }catch(error){
        res.status(500).json({
            message: error.message,
        });
    }
};





const updateTask =async(req, res) =>{
    try{
        const {status}=req.body;

        const task=await Task.findByIdAndUpdate(
            req.params.id,
            {status },
              {
    returnDocument: "after",
    runValidators: true,
  }

        );

        if(!task){
            return res.status(404).json({
                message: "task not found",
            });
        }

        res.status(200).json(task);
    }catch(error){
        res.status(500).json({
            message: error.message,
        });
    }
};



const deleteTask=async(req, res)=>{
    try{
        const task=await Task.findByIdAndDelete(req.params.id);

        if(!task){
            return res.status(404).json({
                message:"Task not found",
            });
        }
        res.status(200).json({
            message: "Task delete sucessfully",
        })
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};









module.exports={
    getTasks,
    createTasks,
    updateTask,
    deleteTask

}