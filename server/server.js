const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();

//* midleware
//* to process JSON-data that comes from requests
app.use(express.json());

const PORT_APP = process.env.PORT || 5500;

app.use(cors());

//* import routes
const ShopRoutes = require("./routes/shop");

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use("/", ShopRoutes);

app.listen(PORT_APP, () => console.log(`Server connected on PORT ${PORT_APP}`));
