const Link = require("../model/links");

exports.createLink = async (req, res) => {
  try {
    const url = req.body;
    const link = await Link.create(url);
    res.status(200).send(link);
  } catch (error) {
    res.status(404).send({ message: "Wrong URL" });
  }
};

exports.getLink = async (_req, res) => {
  try {
    const url = await Link.find();
    res.status(200).send(url);
  } catch (error) {
    res.status(404).send({ message: "Failed to get link" }, error);
  }
};

exports.goLink = async (req, res) => {
  const id = req.params.id;
  try {
    const link = await Link.find({
      short: id,
    });
    res.status(200).send(link);
  } catch (error) {
    res.status(404).send({ message: error });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const user = req.params.user;
    const tasks = await Link.find({user: user});
    res.status(200).send(tasks)
  } catch (error) {
    res.status(404).send({ message: error });
  }
};

exports.deleteURL = async (req, res) => {
  const _id = req.params.id;
  try {
    const deleteURL = await Link.findByIdAndDelete({_id});
    res.send({deletedURL: deleteURL});
  } catch (error) {
    res.status(404).send({ message: error });
  }
}