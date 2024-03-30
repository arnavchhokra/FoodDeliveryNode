const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id:{
        type:Number,
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

var Product = mongoose.model('product', productSchema);
module.exports = Product;
