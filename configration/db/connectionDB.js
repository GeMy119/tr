const mongoose = require("mongoose")


const connection = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/tasksDB").then((result) => {
        console.log("connected DB done")
    }).catch((err) => {
        console.log("error", err)
    })
}



module.exports = connection