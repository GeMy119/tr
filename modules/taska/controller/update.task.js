const statusCodes = require("http-status-codes");
const Task = require("../schema/tasks.schema");

const updateTask = async (req, res) => {
    try {
        const taskId = req.task._id
        const { title, des, status } = req.body
        uData = {
            title,
            des,
            status
        }
        const dataUpdated = await Task.findByIdAndUpdate(taskId, uData, { new: true })
        res.status(statusCodes.OK).json({ message: "task updated done", dataUpdated })
    } catch (error) {

        res.status(statusCodes.BAD_REQUEST).json({ message: "error", error })
    }
}
module.exports = updateTask