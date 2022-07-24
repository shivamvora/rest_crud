const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

//connect do db
mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("connected to db....");
});

app.use(express.json());

// Import routes
const productRoutes = require("./routes/product");

// route Middlewares
app.use("/api/products", productRoutes);

app.listen(4000, () => {
  console.log(`server is running on port 4000`);
});
