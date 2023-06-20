
const { secretKey } = require("../constant")
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send({ status: 401, message: 'No JWT token provided' });
    }

    const formattedToken = token.replace('Bearer ', '');
    jwt.verify(formattedToken, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).send({ status: 401, message: 'Failed to authenticate token' });
        }

        req.user = decoded;
        next();
    });
};

module.exports = {
    verifyToken,
}

// req.user = {
//     "username": admin,
//     "password": admin
// }
