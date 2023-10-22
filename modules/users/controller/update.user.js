const User = require("../schema/user.schema");
const { OK, BAD_REQUEST, INTERNAL_SERVER_ERROR } = require("http-status-codes");

const updateUser = async (req, res) => {
    try {
        const uData = {
            userName: req.body.userName,
            age: req.body.age,
            phone: req.body.phone
        }
        const userId = req.params.id;

        const userDateUpdated = await User.findByIdAndUpdate(userId, uData, { new: true });

        if (!userDateUpdated) {
            return res.status(BAD_REQUEST).json({ message: "User not found or update failed" });
        }

        res.status(OK).json({ message: "User data updated", userDateUpdated });
    } catch (error) {
        console.error(error);
        res.status(INTERNAL_SERVER_ERROR).json({ message: "Internal server error", error: error.message });
    }
}

module.exports = updateUser;
