const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const initalDataRoutes = require("./routes/admin/initialData");
const pageRoutes = require("./routes/admin/page");

env.config();

// mongodb

// mongoose
//   .connect(
//     `mongodb://localhost:27017/flipkart`,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     }
//   )
//   .then(() => {
//     console.log("Database connected");
//   });

  mongoose
  .connect(
    "mongodb+srv://aman_asthana:Thisislove@cluster0.rqowd.mongodb.net/flipkart?ssl=true&authsource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Database connected");
  });

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(morgan("dev"));
app.use(cors(corsOptions));
// app.options("*", cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", initalDataRoutes);
app.use("/api", pageRoutes);

// app.get("/", (req, res, next) => {
//   res.render();
// });

// app.get("/", (req, res, next) => {
//   res.status(200).json({
//     message: "Run from Angular",
//   });
// });

// app.post("/data", (req, res, next) => {
//   res.status(200).json({
//     message: req.body,
//   });
// });

//  app.listen(process.env.PORT || 5000, () => {
//    console.log(`Server is running on port ${process.env.PORT}`);
//  });

app.listen(6000, () => {
  console.log(`Server is running on port 6000`);
});
