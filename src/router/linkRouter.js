const express = require("express");
const { getLink, createLink, goLink, getHistory, deleteURL } = require("../controller/linkControl");
const { authenticateToken } = require("../middleware/verifying");

const linkRouter = express.Router();

linkRouter
  .get("/", authenticateToken, getLink)
  .post("/", authenticateToken, createLink)
  .get("/:id", authenticateToken, goLink)
  .get("/:user/list", authenticateToken, getHistory)
  .delete("/delete/:id", authenticateToken,  deleteURL)

module.exports = linkRouter;
