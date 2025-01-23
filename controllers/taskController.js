import Task from "../models/taskModel.js"



export const postTask = async (req, res) => {
    try {
        const newTask = new Task({ task: req.body.task });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);

    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}


export const getTask = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}
export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { task } = req.body;
        

        // const updatedTask = await Task.findByIdAndUpdate(
        //     id,
        //     {task},
        //     { new: true }
        // );

        const findId=await Task.findById(id)

        if(!findId){
            return res.status(400).json({
                success:false,
                message:"Can't find id"
            })
        }
        const update =await Task.findByIdAndUpdate(id,{task},{new:true})
        res.status(200).json({
            success: true,
            update
        });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}
export const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}