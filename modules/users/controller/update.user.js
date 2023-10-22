const User = require("../schema/user.schema");
const statusCodes = require("http-status-codes");
const updateUser = async (req, res) => {
    try {
        const uData = {
            userName: req.body.userName,
            age: req.body.age,
            phone:req.body.phone
        }
        const userId = req.user.id
        const userDateUpdated = await User.findByIdAndUpdate(userId, uData, { new: true })
        res.status(statusCodes.OK).json({ message: "user data updated", userDateUpdated })
    } catch (error) {
        res.status(statusCodes.BAD_REQUEST).json({ message: "error", error })

    }
}

module.exports = updateUser