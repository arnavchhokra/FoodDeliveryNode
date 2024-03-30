const express = require("express");
const productRoutes = require("./routes/product");
const restaurantRoutes = require("./routes/restaurant");
const userRoutes = require("./routes/user");

const mongoose = require('mongoose');


const app = express();



const url= "mongodb+srv://arnav:1991@cluster0.ojuxzcx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

// Middleware to parse incoming JSON data
app.use(express.json());

app.use("/product", productRoutes);
app.use("/restaurant", restaurantRoutes);
app.use("/user", userRoutes);



app.get("/", (req, res) => {
  res.send("Welcome to my application!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
