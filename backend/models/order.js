const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
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
    totalAmount: {
        type: Number,
    },
  status: {
    type: String,
    enum: ["placed", "paid", "inProgress", "outForDelivery", "delivered"],
  },
  createdAt: { type: Date, default: Date.now },
})
order = mongoose.model('order', orderSchema);
export default order;