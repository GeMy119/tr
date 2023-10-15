const statusCodes = require("http-status-codes");
const Task = require("../../modules/taska/schema/tasks.schema");

const chekUserCreateTask = async (req, res, next) => {
    const taskId = req.params.id;
    const user = req.user
    try {

        const task = await Task.findOne({ _id: taskId });
        if (task) {
            if (user.id == task.userId) {
                req.task = task
                next();
            } else {
                res
                    .status(statusCodes.UNAUTHORIZED)
                    .json({ message: "thats not your task :|" });
            }
        } else {
            res.status(statusCodes.BAD_REQUEST).json({ message: "task not founded" });
        }
    } catch (error) {
        res.status(statusCodes.BAD_REQUEST).json({ message: "error", error });
    }
};
module.exports = chekUserCreateTask;
