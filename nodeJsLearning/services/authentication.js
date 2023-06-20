const jwt = require('jsonwebtoken');
const { secretKey } = require('../constant');

const loginService = (username, password) => {
    if (username === "admin" && password === "admin") {
        return true
    } else {
        return false
    }
}

const getToken = (username, password) => {
    const token = jwt.sign({ "username": username, "password": password }, secretKey, { expiresIn: 60 * 60 }); //x.y.z
    return token
}

module.exports = {
    loginService,
    getToken,
}