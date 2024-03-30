const express = require("express");
const restaurant = require("../controllers/restaurant");
const router = express.Router();

router.get("/", restaurant.getRestaurants);
router.get("/:id", restaurant.getRestaurant);
router.get("/:id/products", restaurant.getRestaurantProducts);
router.post("/add", restaurant.createRestaurant);


module.exports=router;
