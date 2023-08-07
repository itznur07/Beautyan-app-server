const express = require("express");
const { addToCart, getAllCart } = require("../controllers/cartController");
const route = express.Router();

// Routes
route.post("/carts", addToCart);
route.get("/carts", getAllCart);

module.exports = route;
