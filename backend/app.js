const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./Routes/users');
const adminRoutes = require('./Routes/admin');
const restaurantRoutes = require('./Routes/restaurants');
const orderRoutes = require('./Routes/orders');
const categoryRoutes = require('./Routes/categories');

mongoose.connect("mongodb+srv://arnav12:1991@cluster0.ylkrosx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// ExpressMiddlewares
app.use(express.json());
app.use(express.urlencoded());

// AppMiddlewares
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/restaurants', restaurantRoutes);
app.use('/orders', orderRoutes);
app.use('/categories', categoryRoutes);

module.exports = app;
