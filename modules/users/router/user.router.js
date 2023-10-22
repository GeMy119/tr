const updatePassword = require("../controller/changePassword.user")
const login = require("../controller/login.user")
const register = require("../controller/regiser.user")
const validation = require("../../../configration/middlerware/validation")
const { registerSchema, loginSchema, changePasswordSchema, updateUserSchema } = require("../joi/user.joi")
const checkLoginUser = require("../../../configration/middlerware/ckeckLoginUser")
const updateUser = require("../controller/update.user")
const softDeleteUser = require("../controller/softDelete.user")
const deleteUser = require("../controller/delete.user")
const logout = require("../controller/logout.user")
const getUser = require("../controller/getUser")
const verifyUser = require("../controller/verifyUser")
const userRouter = require("express").Router()


userRouter.post("/register", validation(registerSchema), register)
userRouter.post("/login", validation(loginSchema), login)
userRouter.put("/updatePassword", validation(changePasswordSchema), checkLoginUser, updatePassword)
userRouter.put("/updateUser/:id", validation(updateUserSchema), updateUser)
userRouter.put("/softDeleteUser", checkLoginUser, softDeleteUser)
userRouter.get("/logout", checkLoginUser, logout)
userRouter.get("/getUser/:id", getUser)
userRouter.get("/verifyUser/:token", verifyUser)
userRouter.delete("/deleteUser", checkLoginUser, deleteUser)


module.exports = userRouter