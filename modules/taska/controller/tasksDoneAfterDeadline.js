const statusCodes = require("http-status-codes");
const Task = require("../schema/tasks.schema");

const tasksDoneAfterDeadline = async (req, res) => {
    const today = new Date()
    try {
        await Task.find({ deadline: { "$lt": today }, status: { "$ne": "done" } }).
            then((tasks) => {
                res.status(statusCodes.OK).json({ message: "tasks not done", tasks })
            }).catch((err) => {
                res.status(statusCodes.BAD_REQUEST).json({ message: "error********", err })

            })
    } catch (error) {
        res.status(statusCodes.BAD_REQUEST).json({ message: "error", error })
    }
}

module.exports = tasksDoneAfterDeadline