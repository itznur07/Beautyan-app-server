const Products = require("../models/products");

const getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    if (products) {
      res.status(200).send(products);
    } else {
      res.status(404).json({ message: "Data not founded" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getProducts };
