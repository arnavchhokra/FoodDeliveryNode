const Restaurant = require('../models/restaurant');
const Product = require('../models/product');
const mongoose = require('mongoose');


const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getRestaurant = async (req, res) => {
    try{
        const restaurant = await Restaurant.findOne({_id:req.params.id});
        res.status(200).json(restaurant);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}

const getRestaurantProducts = async (req, res) => {
  try {
      const restaurant = await Restaurant.findOne({ _id: req.params.id }).populate('products');
      let pr = restaurant.products;
      let out = await Promise.all(pr.map(async (product, index) => {
          let newProduct = await Product.findOne({ _id: product });
          return newProduct;
      }));
      res.status(200).json(out);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}

const createRestaurant = async (req, res) => {
  try {
      const { _id, name, address, city, country, products } = req.body;

      // Convert product IDs from strings to ObjectIds
      const newRestaurant = new Restaurant({
          _id: _id,
          name: name,
          address: address,
          city: city,
          country: country,
          products: products // Assign the array of ObjectIds to the "products" field
      });

      const savedRestaurant = await newRestaurant.save();

      res.status(201).json(savedRestaurant); // Return the created restaurant
  } catch (error) {
      res.status(400).json({ message: error.message }); // Bad request if something went wrong
  }
}

module.exports = {
  getRestaurants,
  getRestaurant,
  getRestaurantProducts,
  createRestaurant
};
