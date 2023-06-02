const router = require("express").Router();
const foodModel = require("../models/shops");

// get food from the database
router.get("/api/food", async (req, res) => {
  try {
    const allFood = await foodModel.find({});
    res.status(200).json(allFood);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
