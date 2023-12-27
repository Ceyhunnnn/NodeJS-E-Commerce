const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema(
  {
    userId: { type: ObjectID, ref: "users" },
    orderList: { type: Array, default: [] },
  },
  { collection: "order", timestamps: true }
);
const order = mongoose.model("order", orderSchema);
module.exports = order;
