const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const {
  createProduct,
  getProducts,
  getProductDetailsById,
  getAllProductByCategoryName,
  getAllProductById,
  getAllProductByCategoryId
} = require("../controllers/product");
const multer = require("multer");
const router = express.Router();
const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/product/create",
  requireSignin,
  adminMiddleware,
  // upload.array("productImage"),
  createProduct
);

router.get("/products/all", getProducts);
router.get("/product/byId/:productId", getProductDetailsById);
router.post("/productBycategoryName", getAllProductByCategoryName);
router.post("/products/productById", getAllProductById);
router.get("/product/getAllProductByCategoryId/:categoryID", getAllProductByCategoryId);

module.exports = router;
