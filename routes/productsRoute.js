const express = require("express");
const {
  getProducts,
  getProduct,
} = require("../controllers/productsController");

const route = express.Router();

// Routes
route.get("/products", getProducts);
route.get("/products/:id", getProduct);

module.exports = route;
