const express = require("express");
const {
  createUser,
  getUsers,
  Login,
  getUser,
} = require("../controller/userControl");

const userRouter = express.Router();

userRouter
  .get("/", getUsers)
  .get("/login/checkUser", getUser)
  .post("/signup", createUser)
  .post("/login", Login);

module.exports = userRouter;
