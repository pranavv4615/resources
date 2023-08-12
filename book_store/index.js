const express = require("express");
const { getDbDetails } = require("./database");
const jwt = require("jsonwebtoken");

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

app.patch("/books/admin/update/:bookId", async function (req, res) {
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

app.get("/products/thirdpary", async (req, res) => {
  const data = await fetch("https://dummyjson.com/products");
  const jsonData = await data.json();
  res.status(200).json({ data: jsonData });
});

app.get("/users/thirdpary", async (req, res) => {
  const data = await fetch("https://dummyjson.com/users");
  const jsonData = await data.json();
  res.status(200).json({ data: jsonData });
});

app.get("/add/product", async (req, res) => {
  const body = {
    productId: 28,
    productName: "Irom",
  };

  const bodyToSend = JSON.stringify(body);

  const response = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: bodyToSend,
  });

  const data = await response.json();
  res.send(data);
});

app.post("/query/learn/", (req, res) => {
  const productId = req.body.productId;
  const productName = req.body.productName;

  const token = req.body.token;

  if (!token) {
    res.status(401).send("Please provide the token");
  } else {
    var decoded = jwt.verify(token, "123124135afbafksvbasvsufv4r1r414");
    if (decoded) {
      res.status(200).json({
        status: 200,
        message: "authorised user",
        response: { productName: productName, productId: productId },
      });
    } else {
      res.status(401).send("Your token is invalid, please login again");
    }
  }
});

app.post("/app/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  //go to our database, we will check if the username and password is correct or not
  //if the username password matches to our database entry
  //we will generate a jwt token and send that to the client

  //username and password is correct

  const token = jwt.sign(
    { username, password },
    "123124135afbafksvbasvsufv4r1r414"
  );

  res
    .status(200)
    .json({ status: 200, message: "Login succcesfull", token: token });
});

app.listen(3000, function () {
  console.log("server strted at port 3000");
});
