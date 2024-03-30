const express = require("express");
const productsController = require("../controllers/product");

const router = express.Router();

router.get("/", productsController.getProducts);
router.get("/:id", productsController.getProduct);
router.post("/add", productsController.createProduct);

module.exports = router;
