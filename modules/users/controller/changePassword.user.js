const User = require("../schema/user.schema");
const bcrypt = require("bcrypt")
const statusCodes = require("http-status-codes")
const updatePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body
    const userId = req.user.id
    console.log(req.user)
    console.log(userId)
    try {
        const user = await User.findOne({ _id: userId })
        const checkPassword = await bcrypt.compare(currentPassword, user.password)
        if (checkPassword) {
            bcrypt.hash(newPassword, 10, async function (err, hash) {
                if (err) throw err
                user.password = hash
                await user.save()
            })
            res.status(statusCodes.OK).json({ message: "password updated" })
        }
        else {
            res.status(statusCodes.BAD_REQUEST).json({ message: "current password is incorrect" })
        }
    } catch (error) {
        res.status(statusCodes.BAD_REQUEST).json({ message: "error", error })
    }
}

module.exports = updatePassword