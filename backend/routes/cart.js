const express = require("express");
const  cart = require("../controllers/cart");
const router = express.Router();

router.get("/", cart.getCartProducts);
router.get("/", products.convertCartToOrder);

module.exports=router;
