const mongoose = require("mongoose")

const tasksSchema = new mongoose.Schema({
    title: { type: String, required: true },
    des: { type: String, required: true },
    status: { type: String, enum: ["toDo", "doing", "done"], default: "toDo" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    // asignTo: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    deadline: { type: Date, required: true }
},
    {
        timestamps: true
    }
)

const Task = mongoose.model("tasks", tasksSchema)
module.exports = Task;