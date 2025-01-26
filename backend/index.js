const express = require("express");
const cors = require("cors");
const orderRouter = require("./routes/ordersRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", orderRouter);

app.listen(5000, () => {
  console.log("app is listening on port 5000");
});
