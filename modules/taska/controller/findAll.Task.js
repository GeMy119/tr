const statusCodes = require("http-status-codes");
const Task = require("../schema/tasks.schema");

const findAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({}).populate("userId", "userName email age phone")
        res.status(statusCodes.OK).json({ message: "all Taska", tasks })
    } catch (error) {
        res.status(statusCodes.BAD_REQUEST).json({ message: "error)))))", error })
    }
}

module.exports = findAllTasks