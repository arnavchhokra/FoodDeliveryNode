const mongoose = require('mongoose');
const Order = require('./models/order');
const Cart = require('./models/cart');



const getCartProducts = async (req, res) => {
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



const convertCartToOrder = async (req, res) => {
    try {
        const userId = req.UserId;
        const cartId = req.params.cartId;
        const cart = await Cart.findOne({ _id: cartId, userId: userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const newOrder = new Order({
            userId: cart.userId,
            restaurantId: cart.restaurantId,
            products: cart.products,
            totalAmount: 0,
        });

        await newOrder.save();
        await Cart.findByIdAndDelete(cartId);

        res.status(201).json({ message: 'Cart converted to order successfully', order: newOrder });
    } catch (error) {
        res.status(500).json({ message: 'Failed to convert cart to order', error: error.message });
    }
};

module.exports = convertCartToOrder;
