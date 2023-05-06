const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { UserModel } = require("../Models/user.model");
const userRouter = express.Router();
//
userRouter.post("/register", async (req, res) => {
  const { name, email, password, isAdmin } = req.body;
  try {
    const emailCheck = await UserModel.findOne({ email });
    if (emailCheck) {
      res.status(400).send({ message: "User already exists." });
    } else {
      bcrypt.hash(password, 5, async (error, hash) => {
        const userData = new UserModel({
          name,
          email,
          password: hash,
          isAdmin,
        });
        await userData.save();
      });
      res.status(201).send({ message: "Registration successful." });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
//
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (error, result) => {
        if (result) {
          res.status(201).send({
            message: "Login successful.",
            token: jwt.sign({ userID: user._id }, process.env.SECRET_CODE),
          });
        } else {
          res.status(400).send({ message: "Incorrect password." });
        }
      });
    } else {
      res.status(400).send({ message: "User do not exist." });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

//
module.exports = { userRouter };
