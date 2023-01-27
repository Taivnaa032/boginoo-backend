const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const linkRouter = require("./router/linkRouter");
const userRouter = require("./router/userRouter");
const bodyParser = require("body-parser");
const connect = require("./database");
require("dotenv").config();

const port = process.env.PORT;

const app = express();
connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/link", linkRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
