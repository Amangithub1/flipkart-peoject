const Product = require("../models/product");
const slugify = require("slugify");
const Category = require("../models/category");

exports.createProduct = (req, res) => {
  // res.status(200).json({ message: "hello" });
  // res.status(200).json({ file: req.files, body: req.body });
  const { name, price, description, category, quantity,productPictures, createdBy } = req.body;

  console.log('product :'+req.body.productPictures);
  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    quantity,
    description,
    productPictures,
    category,
    createdBy: req.user._id,
  });

  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      // console.log('product :'+product);
      res.status(201).json({ product });
    }
  });
};

exports.getProducts = (req, res) => {
  Product.find({}).exec((error, products) => {
      if (error) {
        return res.status(400).json({ error });
      }
      if (products.length > 0) {
        res.status(200).json({
          products,
          productsByPrice: {
            under5k: products.filter((product) => product.price <= 5000),
            under10k: products.filter(
              (product) => product.price > 5000 && product.price <= 10000
            ),
            under15k: products.filter(
              (product) => product.price > 10000 && product.price <= 15000
            ),
            under20k: products.filter(
              (product) => product.price > 15000 && product.price <= 20000
            ),
            under25k: products.filter(
              (product) => product.price > 20000 && product.price <= 25000
            ),
            under30k: products.filter(
              (product) => product.price > 25000 && product.price <= 30000
            ),
          },
        });
      }
    });
};

exports.getProductDetailsById = (req, res) => {
  const { productId } = req.params;
  if (productId) {
    Product.findOne({ _id: productId }).exec((error, product) => {
      if (error) return res.status(400).json({ error });
      if (product) {
        res.status(200).json({ product });
      }
    });
  } else {
    return res.status(400).json({ error: "Params required" });
  }
};
