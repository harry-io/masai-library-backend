const express = require("express");
const { BookModel } = require("../Models/book.model");
const bookRouter = express.Router();
//

bookRouter.get("/books", async (req, res) => {
  const author = req.query.author;
  const category = req.query.category;
  let query = {};
  if (author) {
    query.author = author;
  }
  if (category) {
    query.category = category;
  }
  try {
    const books = await BookModel.find(query);
    res.status(200).send(books);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
bookRouter.get("/books/:id", async (req, res) => {
  try {
    const books = await BookModel.findOne({ _id: req.params.id });
    res.status(200).send(books);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
// POST
bookRouter.post("/books", async (req, res) => {
  try {
    const newBook = new BookModel(req.body);
    await newBook.save();
    res.status(201).send({ message: "Book added successfully." });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
// PATCH
bookRouter.patch("/books/:id", async (req, res) => {
  const patchData = req.body;
  try {
    const idCheck = await BookModel.findOne({ _id: req.params.id });
    if (idCheck) {
      await BookModel.findByIdAndUpdate(req.params.id, patchData);
      res.status(204).send({ message: "Book details updated." });
    } else {
      res.status(400).send({ message: "Invalid ID." });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
// DELETE
bookRouter.delete("/books/:id", async (req, res) => {
  try {
    const idCheck = await BookModel.findOne({ _id: req.params.id });
    if (idCheck) {
      await BookModel.findByIdAndDelete(req.params.id);
      res.status(202).send({ message: "Book details deleted." });
    } else {
      res.status(400).send({ message: "Invalid ID." });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
//
//
module.exports = { bookRouter };
