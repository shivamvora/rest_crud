const Product = require("../model/Product");

// Get All products
const product_all = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "record fetched....!",
      data: products,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: "something went wrong",
      success: false,
    });
  }
};

// Single product
const product_single = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.status(200).json({
      message: "single record fetched....",
      data: product,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: "something went wrong",
      success: false,
    });
  }
};

// Add New product
const product_create = async (req, res) => {
  console.log("req", req.body);
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    details: req.body.details,
  });
  try {
    const saveProduct = await product.save();
    res.status(200).json({
      success: true,
      message: "record save",
      data: saveProduct,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: "something went wrong",
      success: false,
    });
  }
};

// Update product
const product_update = async (req, res) => {
  console.log("req: ", req.body);
  console.log("req: ", req.params);
  try {
    const product = {
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
      details: req.body.details,
    };
    const updateProduct = await Product.findByIdAndUpdate({
      _id: req.params.productid,
      product,
    });
    res.status(200).json({
      success: true,
      data: updateProduct,
      message: "record updated",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: "something went wrong",
      success: false,
    });
  }
};

// Delete product
const product_delete = async (req, res) => {
  try {
    const removeProduct = await Product.findByIdAndDelete(req.params.productid);
    res.status(200).json({
      success: true,
      data: removeProduct,
      message: "record delete",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: "something went wrong",
      success: false,
    });
  }
};

module.exports = {
  product_all,
  product_single,
  product_create,
  product_update,
  product_delete,
};
