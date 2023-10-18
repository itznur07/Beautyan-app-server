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
    res.status(500).json({ message: "404 Not Found!" });
  }
};

const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Products.findOne({ _id: id });
    res.send(product);
  } catch (error) {
    res.status(404).json({ message: "404 Not Found!" });
  }
};

module.exports = { getProducts, getProduct };
