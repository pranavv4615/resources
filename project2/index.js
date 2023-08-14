const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { get } = require("http");
const { connect } = require("http2");

app.use(express.json());

const getConnection = async () => {
  const uri = "";

  const client = new MongoClient(uri);
  await client.connect();

  const dbName = "user_db";
  const collectionName = "userDetails";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  return collection;
};

const getEmailId = (token) => {
  const decoded = jwt.verify(token, "4512fehrettbdsfbty252524ge354523");
  return decoded?.emailId;
};

app.post("/api/v1/register", async (req, res) => {
  const emailId = req.body.emailId;
  const password = req.body.password;

  const encryptedPassword = bcrypt.hashSync(password, 10);

  const dataToBeInserted = {
    emailId: emailId,
    password: encryptedPassword,
  };
  const connection = await getConnection();
  await connection.insertOne(dataToBeInserted);

  const token = jwt.sign(
    { emailId: emailId },
    "4512fehrettbdsfbty252524ge354523"
  );

  res.status(200).json({
    status: true,
    message: "Request Processed Succesfully",
    token: token,
  });
});

app.post("/api/v1/userDetail", async (req, res) => {
  try {
    const { name, age, gender, height, weight } = req.body;
    const emailId = getEmailId(req.body.token);
    const dataToBeInserted = {
      name,
      age,
      gender,
      height,
      weight,
    };

    const connection = await getConnection();
    await connection.updateOne(
      { emailId: emailId },
      { $set: dataToBeInserted }
    );
    res
      .status(200)
      .json({ status: true, message: "Request Processed Successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Something went wrong", error: error });
  }
});

app.get("/api/v1/userDetail", async (req, res) => {
  const emailId = getEmailId(req.body.token);

  const connection = await getConnection();
  const data = await connection.findOne({
    emailId: emailId,
  });

  res.status(200).json({
    status: true,
    message: "Request Processed Succesfully",
    response: data,
  });
});

app.patch("/api/v1/userDetail", async (req, res) => {
  try {
    const { token, age, weight } = req.body;

    const emailId = getEmailId(token);
    const connection = await getConnection();

    await connection.updateOne(
      { emailId: emailId },
      { $set: { age: age, weight: weight } }
    );

    res.status(200).json({
      status: true,
      message: "Request Processed Succesfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Something went wrong", error: error });
  }
});

app.delete("/api/v1/userDetail", async (req, res) => {
  try {
    const { token } = req.body;

    const emailId = getEmailId(token);
    const connection = await getConnection();

    await connection.deleteOne({ emailId: emailId });

    res.status(200).json({
      status: true,
      message: "Request Processed Succesfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Something went wrong", error: error });
  }
});

app.listen(3000, () => {
  console.log("Listenning on port 3000");
});
