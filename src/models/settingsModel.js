const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
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
  { collection: "settings", timestamps: true }
);

const settings = mongoose.model("settings", settingsSchema);
module.exports = settings;
