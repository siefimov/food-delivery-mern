const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    tel: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
  },
  products: [
    {
      title: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      shop: {
        type: String,
        required: true,
      },
      imgUrl: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalSum: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("orders", orderSchema);
