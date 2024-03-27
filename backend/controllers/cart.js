const mongoose = require('mongoose');
const Order = require('./models/order');
const Cart = require('./models/cart');



const getOrderProducts = async (req, res) => {
    try {
        const userId = req.UserId;
        const cartId = req.params.cartId;

        const cart = await Cart.findOne({ _id: cartId, userId: userId });

        if (!cart) {
            return res.status(404).json({ message: 'cart not found' });
        }
        res.json({ products: cart.products });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch cart products', error: error.message });
    }
};

