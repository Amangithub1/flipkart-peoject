const express = require("express");
const { requireSignin, userMiddleware } = require("../common-middleware");
const { addItemToCart } = require("../controllers/cart");
const router = express.Router();

router.post(
  "/user/cart/addtocart",
  addItemToCart
);

module.exports = router;
