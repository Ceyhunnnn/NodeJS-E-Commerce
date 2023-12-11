const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    cover_photo: { type: String },
    price: { type: Number, default: 0 },
    stock: { type: Number, default: 15 },
    discount: { type: Number, default: 0 },
    colors: { type: Array, default: ["blue", "red", "black"] },
    photos: { type: Array },
    categoryId: { type: ObjectID, ref: "categories" },
  },
  { collection: "products", timestamps: true }
);
const product = mongoose.model("products", productSchema);
module.exports = product;
