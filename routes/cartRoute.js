const express = require("express");
const {
  addToCart,
  getAllCart,
  deleteToCart,
} = require("../controllers/cartController");
const route = express.Router();

// Routes
route.post("/carts", addToCart);
route.get("/carts", getAllCart);
route.delete("/carts/:id", deleteToCart);

module.exports = route;
