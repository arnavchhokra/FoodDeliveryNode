const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
_id: {
        type: Number,
        required: true
    },
    userId: {
        type: Number,
        required: true
    },
    restaurantId: {
        type: Number,
        required: true
    },
    products: [{
        productId: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    totalAmount: Number,
})
cart = mongoose.model('cart', cartSchema);
export default cart;