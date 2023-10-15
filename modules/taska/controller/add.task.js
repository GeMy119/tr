const statusCodes = require("http-status-codes");
const Task = require("../schema/tasks.schema");
const User = require("../../users/schema/user.schema")
const addTask = async (req, res) => {
    try {
        console.log(req.user)
        const { title, des, status,asignTo, deadline } = req.body
        let newTask = new Task({ title, des, status, userId:req.user.id, asignTo, deadline })
        await newTask.save()
        const user = await User.findById( req.user.id )
        user.taskId.push(newTask._id)
        await user.save()
        res.status(statusCodes.OK).json({ message: "task adedd succesfuly" })
    } catch (error) {
        res.status(statusCodes.BAD_REQUEST).json({ message: "erorr in add task", error })
    }
}

module.exports = addTask;