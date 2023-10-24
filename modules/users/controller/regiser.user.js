const User = require("../schema/user.schema");
const bcrypt = require("bcrypt")
const statusCodes = require("http-status-codes");
const jwt = require("jsonwebtoken")
const transporter = require("../../../configration/sendEmail");


const register = async (req, res) => {
    const { userName, email, password, age, phone, gender } = req.body
    try {
        const user = await User.findOne({ email })
        if (user && user.isDeleted == false) {
            res.status(statusCodes.BAD_REQUEST).json({ message: "email is already registerd" })
        }
        else {
            bcrypt.hash(password, 10, async function (err, hash) {
                if (err) throw err
                let newUser = new User(
                    { userName, email, password: hash, age, phone, gender }
                )
                await newUser.save()
                const token = jwt.sign({ email }, "gemy")
                const info = await transporter.sendMail({
                    from: '"verify your account 👻" <foo@example.com>', // sender address
                    to: `${email}`, // list of receivers
                    subject: "Hello ✔", // Subject line
                    text: "verify your email", // plain text body
                    html: `<div>
                           <p>click to verify</p>
                           <a href="https://trelloapp.onrender.com/verifyUser/${token}">verify</a>
                           </div>`, // html body
                });
                res.status(statusCodes.CREATED).json({ message: "regiterd done" })
            })
        }

    } catch (error) {
        res.status(statusCodes.BAD_REQUEST).json({ message: "error", error })
    }

}

module.exports = register