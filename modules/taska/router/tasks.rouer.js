const chekUserCreateTask = require("../../../configration/middlerware/checkUserCreateTask");
const checkLoginUser = require("../../../configration/middlerware/ckeckLoginUser");
const addTask = require("../controller/add.task");
const deleteTask = require("../controller/delete.task");
const updateTask = require("../controller/update.task");
const findAllTasks = require("../controller/findAll.Task");
const tasksDoneAfterDeadline = require("../controller/tasksDoneAfterDeadline");
const validation = require("../../../configration/middlerware/validation");
const { addTaskSchema, updateTaskSchema, deleteTaskSchema } = require("../joi/tasks.joi");
const tasksRouter = require("express").Router()



tasksRouter.post("/addTask",checkLoginUser, validation(addTaskSchema),addTask)
tasksRouter.put("/updateTask/:id", validation(updateTaskSchema), checkLoginUser, chekUserCreateTask, updateTask)
tasksRouter.delete("/deleteTask/:id", validation(deleteTaskSchema), checkLoginUser, chekUserCreateTask, deleteTask)
tasksRouter.get("/findAllTasks", checkLoginUser, findAllTasks)
tasksRouter.get("/tasksDoneAfterDeadline", checkLoginUser, tasksDoneAfterDeadline)

module.exports = tasksRouter;