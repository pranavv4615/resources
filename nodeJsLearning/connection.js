const mysql = require("mysql2");
const { database_host, database_user, database_name } = require("./constant")

// create the connection to database
const connection = mysql.createConnection({
  host: database_host,
  user: database_user,
  database: database_name,
});

module.exports = {
  connection,
};
