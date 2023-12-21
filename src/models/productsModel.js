const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    cover_photo: { type: String },
    price: { type: Number, default: 1 },
    stock: { type: Number, default: 15 },
    discount: { type: Number, default: 0 },
    colors: {
      type: Array,
      default: [
        { name: "blue", id: "blu" },
        { name: "red", id: "re" },
        { name: "black", id: "blac" },
      ],
    },
    photos: { type: Array },
    categoryId: { type: ObjectID, ref: "categories" },
    quantity: { type: Number, default: 1 },
  },
  { collection: "products", timestamps: true }
);
const product = mongoose.model("products", productSchema);
module.exports = product;
