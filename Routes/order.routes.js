const express = require("express");
const { OrderModel } = require("../Models/order.model");
const orderRouter = express.Router();
//
// POST
orderRouter.post("/order", async (req, res) => {
  try {
    const newOrder = new OrderModel(req.body);
    await newOrder.save();
    res.status(201).send({ message: "Order successful." });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
// GET
orderRouter.get("/orders", async (req, res) => {
  try {
    const orders = await OrderModel.find({});
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
//
//
module.exports = { orderRouter };
