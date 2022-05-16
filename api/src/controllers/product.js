const Product = require("../models/product");
const slugify = require("slugify");
const Category = require("../models/category");
const category = require("../models/category");

exports.createProduct = (req, res) => {
  // res.status(200).json({ message: "hello" });
  // res.status(200).json({ file: req.files, body: req.body });
  const { name, price,description, category, quantity,pic, createdBy } = req.body;
  console.log(req.body.description);
  console.log('product :'+req.body.pic);
  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    quantity,
    description,
    pic,
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
  console.log('getProductDetailsById method '+productId);
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

exports.getAllProductByCategoryId = (req, res) => {
  console.log("getAllProductByCategoryId req "+req.query.categoryID)
  const { categoryID } = req.body;
  console.log("getAllProductByCategoryId  "+categoryID)
  if (catId) {
    Category.findOne({ _id:catId }).exec((error, category) => {
      if (error) return res.status(400).json({ error });
      if (category) {
        res.status(200).json({ category });
      }
    });
  } else {
    return res.status(400).json({ error: "Params required" });
  }
};

exports.getAllProductByCategoryName = (req, res) => {
  const { categoryName }= req.body;
  console.log('getAllProductByCategoryName : '+req.body.categoryName);
  if(categoryName) {
  Category.findOne( { name : categoryName }).exec((error, mycategory) => 
  {
    if (error) return res.status(400).json({ error });
    if (mycategory)
    {
  console.log('getAllProductByCategoryName cat'+mycategory);
  var ObjectId = require('mongoose').Types.ObjectId;
  let id= ObjectId(mycategory._id);
  console.log('categoryName'+id);
    Product.find({ category : id  }).exec((error, product) => 
    {
      if (error) return res.status(400).json({ error });
      if (product)
      {
        res.status(200).json({ product });
      }
    });
  }
});
} else {
    return res.status(400).json({ error: "Params required" });
  }
};