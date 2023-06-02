const router = require("express").Router();
const shopModel = require("../models/shops");
const foodModel = require("../models/food");

// get shops from the database
router.get("/api/shops", async (req, res) => {
  try {
    const allShops = await shopModel.find({});
    res.status(200).json(allShops);
  } catch (error) {
    res.json(error);
  }
});

// get food from the database
router.get("/api/food", async (req, res) => {
  try {
    const allFood = await foodModel.find({});
    res.status(200).json(allFood);
  } catch (error) {
    res.json(error);
  }
});

// get food by shop
router.get("/api/food/:shop", async (req, res) => {
  try {
    const shopsFood = await foodModel.find({ shop: req.params.shop });
    res.status(200).json(shopsFood);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
