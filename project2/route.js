const express = require("express");
const app = express();
const controller = require("./controller/controller");

app.post("/register", controller.register);
app.post("/userDetail", controller.createUserDetails);
app.get("/userDetail", controller.getUserDetails);
app.patch("/userDetail", controller.updateUserDetails);
app.delete("/userDetail", controller.deleteUserDetails);
app.patch("/playerDetails", controller.updatePlayerDetails);
app.get("/playerDetails/", controller.getPlayerDetails);
