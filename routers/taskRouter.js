import express from "express"
import { deleteTask, getTask, postTask, updateTask } from "../controllers/taskController.js";

const taskRouter = express.Router();


taskRouter.post("/post",postTask)
taskRouter.get("/get",getTask)
taskRouter.put("/update/:id",updateTask)
taskRouter.delete("/delete/:id",deleteTask)


export default taskRouter

