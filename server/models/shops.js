const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("shop", ShopSchema);
