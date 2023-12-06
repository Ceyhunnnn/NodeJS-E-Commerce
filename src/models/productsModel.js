const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    cover_photo: { type: String },
    category: { type: String },
    price: { type: Number, default: 0 },
    stock: { type: Number, default: 15 },
    discount: { type: Number, default: 0 },
    colors: { type: Array, default: ["blue", "red"] },
    photos: { type: Array },
  },
  { collection: "products", timestamps: true }
);
const product = mongoose.model("products", productSchema);
module.exports = product;
