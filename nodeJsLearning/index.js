// index.js
const express = require("express");
const app = express();

const router = require("./route"); //imporant
app.use(express.json());
app.use("/api", router);

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
