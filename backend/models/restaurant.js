const mongoose = require('mongoose');
const product = require('./product');


const restaurantSchema = mongoose.Schema({
  _id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  products: [{
    type:Number
  }]
});



var restaurant = mongoose.model('restaurant', restaurantSchema);
module.exports = restaurant;

