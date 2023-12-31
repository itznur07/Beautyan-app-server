const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  category: String,
  desc: String,
  image: String,
  qty: Number,
});

/** Collection */
const Carts = mongoose.model("Carts", cartSchema);

module.exports = Carts;
