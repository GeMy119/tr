const statusCodes = require("http-status-codes");
const jwt = require("jsonwebtoken");
const checkLoginUser = async (req, res, next) => {
    //console.log(token);
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];
            if (token) {
                const decodedToken = jwt.verify(token, "gemy")
                const user = decodedToken;
                console.log(user.isLogin)
                if (user.isLogin == true) {
                    if (user.isDeleted == false) {
                        req.user = user
                        console.log("done")
                        next()
                    }
                    else {
                        res.status(statusCodes.UNAUTHORIZED).json({ message: "UNAUTHORIZED this user is not founded" })
                    }
                }
                else {
                    res.status(statusCodes.UNAUTHORIZED).json({ message: "UNAUTHORIZED plese log in first" })
                }
            }
            else {
                res.status(statusCodes.UNAUTHORIZED).json({ message: "UNAUTHORIZED invalid token" })
            }
        }
        else {
            res.status(statusCodes.UNAUTHORIZED).json({ message: "UNAUTHORIZED headers not founded" })
        }


    }
    catch (error) {
        res.status(statusCodes.BAD_REQUEST).json({ message: "error", error });
    }
};
module.exports = checkLoginUser;
