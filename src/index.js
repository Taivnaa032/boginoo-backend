const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const linkRouter = require("./router/linkRouter");
const userRouter = require("./router/userRouter");
const app = express();
const bodyParser = require("body-parser")
require("dotenv").config();

const port = process.env.PORT ;


mongoose.connect(
  process.env.MONGODB_URL, 
  { useNewUrlParser: true }
);

mongoose.connection.once("open", () => {
  console.log("Connected to Mongo");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/link", linkRouter); 
app.use(userRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


