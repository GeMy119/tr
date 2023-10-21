const express = require("express")
const session=require("express-session")
const cors=require("cors")
const userRouter = require("./modules/users/router/user.router")
const tasksRouter = require("./modules/taska/router/tasks.rouer")
const connection = require("./configration/db/connectionDB")

const port=process.env.PORT || 5555

const app = express()
connection()
app.use(cors())
app.use(express.json()) // convert data to json
app.use(userRouter)
app.use(tasksRouter)
// app.use(session({
//     secret: 'gemy',
//     resave: false,
//     saveUninitialized: true
//   }));


app.listen(port, () => {
    console.log(`app runing in port ${port}`)
})