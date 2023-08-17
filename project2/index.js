const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
const route = require("./route");

app.use(express.json());
app.use("/api/v1", route);

app.listen(3000, () => {
  console.log("Listenning on port 3000");
});
