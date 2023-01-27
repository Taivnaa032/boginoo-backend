const jwt = require("jsonwebtoken");

exports.authenticateToken = async (req, res, next) => {
  const token = req?.headers?.token
  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (error, _user) => {
      if (error) {
        return res.send({ error: error}).status(500);
      }
      next();
    });
  } catch (error) {
    res.send(error).status(404);
  }
};
