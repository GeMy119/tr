const User = require("../schema/user.schema");
const jwt = require("jsonwebtoken")
const statusCodes = require("http-status-codes")
const bcrypt = require("bcrypt")


const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user || user.isDeleted == true) {
            res.status(statusCodes.BAD_REQUEST).json({ message: "email is not founded" })
        }
        else {
            const match = await bcrypt.compare(password, user.password)
            if (match) {
                const token = jwt.sign({
                    id: user._id,
                    userName: user.userName,
                    isLogin: user.isLogin,
                    isDeleted: user.isDeleted,
                    isVerified: user.isVerified
                }, "gemy")
                user.isLogin = true
                await user.save()
                res.status(statusCodes.OK).json({ message: `welcome ${user.userName}`, token })
            }
            else {
                res.status(statusCodes.BAD_REQUEST).json({ message: "password is incorrect" })
            }
        }
    } catch (error) {
        res.status(statusCodes.BAD_REQUEST).json({ message: "error", error })
    }
}

module.exports = login