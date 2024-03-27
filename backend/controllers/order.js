const mongoose = require('mongoose');
const Order = require('./models/order');

// Function to get order products and calculate total amount
const getOrderProducts = async (req, res) => {
    try {
        const userId = req.UserId;
        const orderId = req.params.orderId;

        const order = await Order.findOne({ _id: orderId, userId: userId });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        let totalAmount = 0;

        res.json({ products: order.products });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch order products', error: error.message });
    }
};

module.exports = getOrderProducts;
