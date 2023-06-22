const { loginService, getToken, registerService } = require('../services/authentication');
const util = require('util');

const register = (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password

        const result = registerService(username, password)
        if (result) {
            res.status(200).send({ status: 200, message: "Registration successfull", response: result })
        } else {
            res.status(400).send({ status: 400, message: "Insertion to database is unsuccesfull", response: result })
        }
    } catch (err) {
        res.status(500).send({ status: 500, message: "Something went wrong! Please try again later" })
    }
}

const login = async (req, res) => {
    try {
        const username = req.body.username
        const passowrd = req.body.password

        const result = await loginService(username, passowrd)
        if (result) {
            //login successfull
            const token = getToken(username, passowrd)
            res.status(200).send({ status: 200, message: "Login Successfull", token: token })
        } else {
            //login failed
            res.status(401).send({ status: 401, error: "Login Failed" })
        }
    } catch (err) {
        res.status(500).send({ status: 500, message: "Something went wrong! Please try again later" })
    }

}

module.exports = {
    login,
    register
}