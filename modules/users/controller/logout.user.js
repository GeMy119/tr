const User = require("../schema/user.schema");
const statusCodes = require("http-status-codes");
// const session = require("express-session")

const logout = async (req, res) => {
    try {
        const user = req.user
        console.log(user)
        let isLogin = user.isLogin
        const uData = {
            isLogin: false
        }
        await User.findByIdAndUpdate(user.id, uData, { new: true })
        // req.session.destroy((err) => {
        //     if (err) {
        //         return res.status(500).send('Error logging out');
        //     }
        //     console.log("destroyed")
        //     // Redirect the user to the login page or any other page you prefer
        //     res.redirect('/login');
        //     console.log("redirect")
        // });

        res.status(statusCodes.OK).json({ message: 'Logout successful' });
    }
    catch (error) {
        res.status(statusCodes.BAD_REQUEST).json({ message: "error*******", error })
    }
}

module.exports = logout