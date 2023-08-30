const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  category: String,
  desc: String,
  image: String,
  qty: Number,
});

const Products = mongoose.model("Products", productSchema);
module.exports = Products;
