const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  title: String, 
  price: Number,
  category: String,
  desc: String,
  image: String,
});


/** Collection */
const Carts = mongoose.model("Carts", cartSchema);

module.exports = Carts;
