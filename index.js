const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./Routes/user.routes");
const { auhorization } = require("./Middlewares/auth.mw");
const { bookRouter } = require("./Routes/book.routes");
const { orderRouter } = require("./Routes/order.routes");
const { relationship } = require("./Middlewares/relation.mw");

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(auhorization);
app.use(relationship);
app.use(bookRouter);
app.use(orderRouter);
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Mongo DB connected !");
    console.log(`Port ruuning at ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
