const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const checkController = require("./controllers/check.controller");
const userController = require("./controllers/user.controller")

app.use("/",checkController);
app.use("/",userController);


module.exports = app;