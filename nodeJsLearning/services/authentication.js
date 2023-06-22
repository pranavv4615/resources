const jwt = require('jsonwebtoken');
const { secretKey } = require('../constant');
const { queryPromise } = require('../connection');
const { tables, SALT } = require("../constant")
const bcrypt = require('bcrypt');

const loginService = (username, password) => {
    return new Promise((resolve, reject) => {
        queryPromise("SELECT username, password FROM " + tables.user + " WHERE username = ?", [username])
            .then(rows => {
                if (rows.length > 0) {
                    const dbPassword = rows[0].password;

                    if (bcrypt.compareSync(password, dbPassword)) {
                        console.log("Password and Username is correct");
                        resolve(true);
                    } else {
                        console.log("Password is incorrect");
                        resolve(false);
                    }
                } else {
                    console.log("No matching username found");
                    resolve(false);
                }
            })
            .catch(err => {
                console.error("Error executing query:", err);
                reject(err);
            });
    });
}

const getToken = (username, password) => {
    const token = jwt.sign({ "username": username, "password": password }, secretKey, { expiresIn: 60 * 60 }); //x.y.z
    return token
}

const encryptPassword = (password) => {
    const hash = bcrypt.hashSync(password, SALT);

    return hash
}

const registerService = (username, password) => {
    const hashedPassword = encryptPassword(password)
    queryPromise(`INSERT INTO ${tables['user']} VALUES (?, ?)`, [username, hashedPassword])
        .then(results => {
            console.log("Insertion successful");
            return true
            // Handle the successful insertion here
        })
        .catch(err => {
            return false;
        });

}

module.exports = {
    loginService,
    getToken,
    registerService
}