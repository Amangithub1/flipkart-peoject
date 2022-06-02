const Cart = require("../models/cart");

exports.addItemToCart = (req, res) => {
      const { user,product,price,quantity,address} = req.body;
      const mycart = new Cart({
        user,
        product,
        price,
        quantity,
        address
      });

      mycart.save((error, mycart) => {
        if (error) return res.status(400).json({ error });
        if (mycart) {
          console.log(mycart);
          return res.status(201).json({ mycart });
        }
      });
};
