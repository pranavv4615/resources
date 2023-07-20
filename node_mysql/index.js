const express = require("express")
const app = express()
const mysql = require('mysql2');

const cors = require('cors')


const port = 8001




app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get("/employee/details", cors(), async function(req, res){
    console.log('123214443414141')
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({host:'127.0.0.1', user: 'root', password:'', database: 'employee_db'});
    const [rows, fields] = await connection.execute('SELECT * FROM employee');

      res.status(200).json({status: true, response:rows })
    
})


app.listen(port, () => {
    console.log(`our app listening on port ${port}`)
  })