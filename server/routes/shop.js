const router = require("express").Router();
const shopModel = require("../models/shops");
const FoodModel = require("../models/food");

const OrderModel = require("../models/orders");

// get shops from the database
router.get("/api/shops", async (req, res) => {
  try {
    const allShops = await shopModel.find({});
    res.status(200).json(allShops);
  } catch (error) {
    res.json(error);
  }
});

// get all food from the database
router.get("/api/food", async (req, res) => {
  try {
    const allFood = await FoodModel.find({});
    res.status(200).json(allFood);
  } catch (error) {
    res.json(error);
  }
});

// get food by shop
router.get("/api/food/:shop", async (req, res) => {
  try {
    const shopsFood = await FoodModel.find({ shop: req.params.shop });
    res.status(200).json(shopsFood);
  } catch (error) {
    console.log(error);
  }
});

// add order to database
router.post("/api/order", async (req, res) => {
  try {
    // const { user, products } = req.body;
    const newOrder = new OrderModel({
      user: req.body.user,
      products: req.body.products,
      totalSum: req.body.totalSum,
    });

    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
