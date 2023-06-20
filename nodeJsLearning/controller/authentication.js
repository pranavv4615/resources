const { loginService, getToken } = require('../services/authentication');


const login = (req, res) => {
    try {
        const username = req.body.username
        const passowrd = req.body.password

        const result = loginService(username, passowrd)
        if (result) {
            //login successfull
            const token = getToken(username, passowrd)
            res.status(200).send({ status: 200, message: "Login Successfull", token: token })
        } else {
            //login failed
            res.status(401).send({ status: 401, message: "Login Failed" })
        }
    } catch (err) {
        res.status(500).send({ status: 500, message: "Something went wrong! Please try again later" })
    }

}

module.exports = {
    login
}