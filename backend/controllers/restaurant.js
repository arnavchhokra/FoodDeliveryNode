import restaurant from "../models/restaurant";

const getRestaurants = async (req, res) => {
  try {
    const restaurant = await restaurant.find();
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


const getRestaurant = async (req, res) => {
    try{
        const restaurant = await restaurant.findOne({_id:req.params.id});
        res.status(200).json(restaurant);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}


const getRestaurantProducts = async (req, res) => {
    try {
        const restaurant = await restaurant.findOne({ _id: req.params.id }).populate('products');
        res.status(200).json(restaurant.products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};