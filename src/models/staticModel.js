const mongoose = require("mongoose");

const staticSchema = new mongoose.Schema(
  {
    contact: {
      phone: {
        type: String,
      },
      email1: { type: String },
      email2: { type: String },
    },
    about: {
      description: {
        type: String,
      },
      managerList: {
        type: Array,
      },
      serviceList: {
        type: Array,
      },
    },
  },
  { collection: "static", timestamps: true }
);

const static = mongoose.model("static", staticSchema);
module.exports = static;
