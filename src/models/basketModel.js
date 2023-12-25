const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const basketSchema = new mongoose.Schema(
  {
    userId: { type: ObjectID, ref: "users" },
    basketList: { type: Array, default: [] },
  },
  { collection: "basket", timestamps: true }
);

const basket = mongoose.model("basket", basketSchema);
module.exports = basket;
