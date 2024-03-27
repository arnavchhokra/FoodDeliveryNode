import product from '../models/product.js';

const getProducts = async(req,res) =>{
    try{
        const products = await product.find();
        res.status(200).json(products);
    }
    catch(error)
    {
    res.status(404).json({message:error.message});
    }
}


const getProduct = async(req,res) =>{
    try{
        const product = await product.findOne({_id:req.params.id});
        res.status(200).json(product);
    }
    catch(error)
    {
    res.status(404).json({message:error.message});
    }
}

