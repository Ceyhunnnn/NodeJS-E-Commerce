const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    slug: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { collection: "categories", timestamps: true }
);
const categories = mongoose.model("categories", categorySchema);
module.exports = categories;
