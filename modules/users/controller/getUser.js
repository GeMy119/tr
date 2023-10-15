const User = require("../schema/user.schema");
const statusCodes = require("http-status-codes")
const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate("taskId").select("-id")
        res.status(statusCodes.OK).json({ message: "user ", user })
    } catch (error) {
        res.status(statusCodes.BAD_REQUEST).json({ message: "error ", error })

    }
}
module.exports = getUser