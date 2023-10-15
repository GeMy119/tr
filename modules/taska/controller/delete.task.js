const statusCodes = require("http-status-codes");
const Task = require("../schema/tasks.schema");

const deleteTask = async (req, res) => {
    try {
        const taskId = req.task._id
        await Task.findByIdAndDelete({ _id: taskId })
        res.status(statusCodes.OK).json({ message: "task deleted" })

    } catch (error) {
        res.status(statusCodes.BAD_REQUEST).json({ message: "error", error })
    }
}

module.exports = deleteTask