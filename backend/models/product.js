const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id:{
        type:Number,
        required: true
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

var product = mogoose.model('product', productSchema);
export default product;
