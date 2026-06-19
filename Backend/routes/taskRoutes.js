const express=require("express");
const router=express.Router();

const {getTasks, createTasks, updateTask, deleteTask}=require("../controllers/taskController");

router.get("/", getTasks);
router.post("/",createTasks);
router.put("/:id",updateTask);
router.delete("/:id",deleteTask);



module.exports=router;