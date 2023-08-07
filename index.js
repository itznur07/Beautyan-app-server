const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const cartRoute = require("./routes/cartRoute");
const port = process.env.PORT || 5000;
require("dotenv").config();

/** Middleware */
app.use(cors());
app.use(express.json());

/** Database Connection */
connectDB();

/** Routes */
app.use("/", cartRoute);

app.get("/", (req, res) => {
  res.send("Hello Beautyans");
});

app.listen(port, () => {
  console.log("Server is running on Port 5000");
});
