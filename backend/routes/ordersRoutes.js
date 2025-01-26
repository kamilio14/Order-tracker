const {
  getOrders,
  postOrders,
  deleteOrder,
  getOrderById,
  putOrders,
} = require("../controlers/orderControler");

const express = require("express");
const router = express.Router();

router.get("/", getOrders);
router.get("/:id", getOrderById);
router.post("/", postOrders);
router.delete("/:id", deleteOrder);
router.put("/", putOrders);

module.exports = router;
