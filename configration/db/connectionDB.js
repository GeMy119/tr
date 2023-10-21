const mongoose = require("mongoose")


const connection = () => {
    return mongoose.connect("mongodb+srv://trelloApp:trelloApp@atlascluster.zgoi85r.mongodb.net/").then((result) => {
        console.log("connected DB done")
    }).catch((err) => {
        console.log("error", err)
    })
}



module.exports = connection

