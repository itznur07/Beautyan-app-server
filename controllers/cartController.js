const Carts = require("../models/carts");

const addToCart = async (req, res) => {
  const { id, title, price, desc, category, image, qty } = req.body;

  cartItem = new Carts({
    id,
    title,
    price,
    desc,
    category,
    image,
    qty,
  });

  try {
    let existItem = await Carts.findOne(cartItem);
    if (!existItem) {
      await cartItem.save();
      res.status(201).json({ success: true, data: cartItem });
    } else {
      res.status(500).json({ message: "There was a wrong" });
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

const getAllCart = async (req, res) => {
  try {
    const carts = await Carts.find();
    if (carts) {
      res.status(200).send(carts);
    } else {
      res.status(404).json({ message: "Data not founded" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
// fucntion for deleted to cart mm
const deleteToCart = async (req, res) => {
  try {
    const id = req.params.id;
    const carts = await Carts.findOneAndRemove({ _id: id });

    res.send(carts);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addToCart, getAllCart, deleteToCart };
