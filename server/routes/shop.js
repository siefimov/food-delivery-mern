const router = require("express").Router();
const shopModel = require("../models/shops");

// get shops from the database
router.get("/api/shops", async (req, res) => {
  try {
    const allShops = await shopModel.find({});
    res.status(200).json(allShops);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
