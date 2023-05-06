const jwt = require("jsonwebtoken");
require("dotenv").config();
//
//
const auhorization = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.SECRET_CODE, (error, decoded) => {
      if (decoded) {
        next();
      } else {
        res.status(400).send({ message: "Invalid token." });
      }
    });
  } else {
    res.status(400).send({ message: "Invalid token." });
  }
};
//
//
module.exports = { auhorization };
