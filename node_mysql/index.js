const express = require("express")
const app = express()
const mysql = require('mysql2');

const cors = require('cors')
const port = 8001

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://pranavvsingh50:Seamless123@cluster0.rvlrxxy.mongodb.net/?retryWrites=true&w=majority";;

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

app.get("/user/details", cors(), async function(req, res){

  // const {name} = req.query;
  const userData = 
  [{
      "name": "Ramesh",
      "age": 24,
      "gender": "MALE",
      "company_name": "Jane Corporation",
      "salary": 58000,
  },
  {
    "name": "Madhav",
    "age": 25,
    "gender": "MALE",
    "company_name": "GML Corporation",
    "salary": 58000,
    },
    {
      "name": "Gopal",
      "age": 25,
      "gender": "MALE",
      "company_name": "GML Corporation",
      "salary": 58000,
      }]

  await client.connect()
  const database =  client.db("users");
  const collection =  database.collection("userdetails")

  // const query1 = {$and:[{"gender": "FEMALE"}, {age: {$gt: 25}}, {salary: {$gt: 55000}}]}
  // const query2 = {$and: [{"gender": "MALE"}, {age: {$gt:28}}, {salary: {$lt: 55000}}]}
  // console.log(name)
  // const query3 = {"name": name} //{"name": "jack"}

  // const insertCursor = await collection.insertMany(userData)
  // console.log("insertCursor", insertCursor)
  const cursor = await collection.find({ "company_name": "GML Corporation"})

  
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