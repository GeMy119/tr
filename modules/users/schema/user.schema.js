// database user schema  

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        userName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        age: { type: Number, required: true },
        phone: { type: Number, required: true },
        gender: { type: String, required: true },
        isVerified: { type: Boolean, default: false },
        isLogin: { type: Boolean, default: false },
        isDeleted: { type: Boolean, default: false },
        taskId: [{ type: mongoose.Types.ObjectId,ref:"tasks" }],
    }
    , {
        timestamps: true
    }
)

const User = mongoose.model("users", userSchema)

module.exports = User