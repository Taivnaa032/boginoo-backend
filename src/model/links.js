const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  original: { type: String },
  short: { type: String },
  user: {type: String}
});

const Link = mongoose.model("links", LinkSchema);

module.exports = Link;
