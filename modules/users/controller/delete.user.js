const User = require("../schema/user.schema");
const statusCodes = require("http-status-codes");

const deleteUser = async (req, res) => {
    try {
        const userId = req.user.id
        await User.findByIdAndDelete(userId)
        res.status(statusCodes.OK).json({ message: "user deleted" })
    }
    catch (error) {
        res.status(statusCodes.BAD_REQUEST).json({ message: "error", error })
    }
}

module.exports = deleteUser