const express = require("express");
const { getDbDetails } = require("./database");

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.get("/", function (req, res) {
  res.send("hello word");
});

app.post("/books/admin/upload", async function (req, res) {
  try {
    const books_data = req.body.books;
    const { database, collection } = await getDbDetails();
    const insertManyResult = await collection.insertMany(books_data);
    console.log(
      `${insertManyResult.insertedCount} books successfully inserted.\n`
    );

    res.send("books successfully inserted");
  } catch (err) {
    console.error(
      `Something went wrong trying to insert the new documents: ${err}\n`
    );
  }
});

app.get("/users/books", async function (req, res) {
  try {
    const { database, collection } = await getDbDetails();
    const cursor = await collection.find({});
    const result = [];
    await cursor.forEach((books) => {
      result.push(books);
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

app.listen(3000, function () {
  console.log("server strted at port 3000");
});
