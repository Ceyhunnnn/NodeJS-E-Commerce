const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
    },
    registerDate: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "users", timestamps: true }
);
const user = mongoose.model("users", userSchema);
module.exports = user;
