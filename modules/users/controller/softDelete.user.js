const User = require("../schema/user.schema");
const statusCodes = require("http-status-codes");

const softDeleteUser = async (req, res) => {
    try {
        const user = req.user;
        const isDeleted = user.isDeleted
        const uData = {
            isDeleted: true
        }
        const softDelete = await User.findByIdAndUpdate(user.id, uData, { new: true })
        res.status(statusCodes.OK).json({ message: "user deleted", softDelete })

    } catch (error) {
        res.status(statusCodes.BAD_REQUEST).json({ message: "error", error })
    }
}
module.exports = softDeleteUser