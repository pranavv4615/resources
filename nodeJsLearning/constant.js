const secretKey = "ppmymnsi3x"
const database_host = "127.0.0.1"
const database_user = "root"
const database_name = "users"

const tables = {
    user: "user",
    bankDetails: "bankDetails",
    userDetails: "userDetails"
}

const SALT = 5

module.exports = {
    secretKey,
    database_host,
    database_user,
    database_name,
    tables,
    SALT
}