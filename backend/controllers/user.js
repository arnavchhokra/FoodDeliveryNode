const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const newUser = new User({ username, email, password: hashedPassword }); // Store hashed password in the database
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Registration failed', error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        console.log('User:', user);
        console.log('User Password:', user ? user.password : null);

        // Check if user exists
        if (!user) {
            return res.status(401).json({ message: 'Cant find no user biatch' });
        }

        // Compare hashed password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword)
        let isPasswordValid=0;
        if(password==hashedPassword)
        {
            isPasswordValid=1;
        }
        console.log('isPasswordValid:', isPasswordValid);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = generateToken(user);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
};



const generateToken = (user) => {
    return jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '10h' }); // Replace 'your_secret_key' with your actual secret key
};

module.exports = {
    registerUser,
    loginUser
};
