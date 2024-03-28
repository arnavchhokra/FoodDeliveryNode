const mongoose = require('mongoose');
import product from './product';

const restaurantSchema = mongoose.Schema({
    _id:{
        type:Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

var restaurant = mongoose.model('restaurant', restaurantSchema);
export default restaurant;
