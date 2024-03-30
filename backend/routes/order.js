const express = require("express");
const  order = require("../controllers/order");
const router = express.Router();

router.get("/", order.getOrderProducts);

module.exports=router;
