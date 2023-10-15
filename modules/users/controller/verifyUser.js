const User = require("../schema/user.schema");
const jwt = require("jsonwebtoken")
const statusCodes = require("http-status-codes")

const verifyUser = async (req, res) => {
    try {
        const token = req.params.token
        const decodedToken = jwt.verify(token, "gemy")
        const user = await User.findOne({ email: decodedToken.email })
        if (user) {
          await User.updateOne({ email: decodedToken.email }, { isVerified: true })
            res.status(statusCodes.OK).json({ message: "email verified done" })
        }
        else {
            res.status(statusCodes.BAD_REQUEST).json({ message: "email is not verified" })
        }
    } catch (error) {
        res.status(statusCodes.BAD_REQUEST).json({ message: "error", error })
    }
}
module.exports = verifyUser