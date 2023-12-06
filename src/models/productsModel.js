const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
  },
  { collection: "products", timestamps: true }
);
const product = mongoose.model("products", productSchema);
module.exports = product;
