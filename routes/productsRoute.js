const express = require("express");
const { getProducts } = require("../controllers/productsController");

const route = express.Router();

// Routes
route.get("/products", getProducts);

module.exports = route;
