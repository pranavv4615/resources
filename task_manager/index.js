const express = require('express');
const mongodb = require('mongodb');

const { MongoClient, ServerApiVersion } = require('mongodb');


const app = express();
const port = 3000;

app.use(express.json());

// API routes

const uri = "mongodb+srv://pranavvsingh46:TjS55NKOLrHlJFwj@cluster0.8x5fdts.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


const dbName = "task_manager_db";
const collectionName = "task";


const database = client.db(dbName); //task_manager_db
const collection = database.collection(collectionName); //db.collection(task)


app.post('/api/tasks', async (req, res) => {
    try {

        //making a connection with mongodb
        await client.connect();

        //collectig the data
        const data = {
            task_name: req.body.task_name,
            task_description: req.body.task_description,
            due_date: req.body.due_date
        }

        //posting the data in the database(mongodb)
        const result = await collection.insertOne(data);

        res.json(result);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/tasks', async (req, res) => {
    try {

        //making a connection with mongodb
        await client.connect();

        //collectig the data
        const data = {
            task_name: req.query.task_name
        }

        //retrieving the data from the database(mongodb)
        const cursor = await collection.find(data); //db.task.find({ })

        let result = []
        await cursor.forEach(data => {
            result.push(data)
        });
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/allTasks', async (req, res) => {
    try {

        //making a connection with mongodb
        await client.connect();

        //retrieving the data from the database(mongodb)
        const cursor = await collection.find({}); //db.task.find({ })

        let result = []
        await cursor.forEach(data => {
            result.push(data)
        });
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
