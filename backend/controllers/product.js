const Product = require('../models/product');

const getProducts = async(req,res) =>{
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch(error)
    {
        res.status(404).json({message:error.message});
    }
}

const getProduct = async(req,res) =>{
    try{
        const product = await Product.findOne({_id:req.params.id});
        res.status(200).json(product);
    }
    catch(error)
    {
        res.status(404).json({message:error.message});
    }
}

const createProduct = async (req, res) => {
    try {
        const { _id,name, description, price, image } = req.body;
        const newProduct = new Product({
            _id:_id,
            name: name,
            description: description,
            price: price,
            image: image
        });

        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct); // Return the created product
    } catch (error) {
        res.status(400).json({ message: error.message }); // Bad request if something went wrong
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct
};
