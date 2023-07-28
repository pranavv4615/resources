const express = require("express")
const app = express()
const mysql = require('mysql2');

const cors = require('cors')
const port = 8001

const { MongoClient } = require('mongodb');
const uri = "";

const client = new MongoClient(uri);


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

app.get("/restraunt/details", cors(), async function(req, res){

  await client.connect()
  const database =  client.db("restraunt_db");
  const collection =  database.collection("restaurant")


  const cursor = await collection.find({"name": "pranav restraunt"})

  
  const data = []
  await cursor.forEach(details => {
    console.log(details)
    data.push(details)
  });

  res.status(200).json({status: true, response:data }) 
})


app.listen(port, () => {
    console.log(`our app listening on port ${port}`)
  })