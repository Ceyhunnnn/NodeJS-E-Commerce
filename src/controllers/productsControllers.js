const APIError = require("../utils/error");
const Response = require("../utils/response");
const product = require("../models/productsModel");
const createProduct = async (req, res) => {
  const newProduct = new product(req.body);
  await newProduct
    .save()
    .then(() => new Response(null, "Product Created!").success(res))
    .catch(() => new APIError("Product not be created", 400));
};

const getAllProducts = async (req, res) => {
  const productData = await product.find();
  new Response(productData, "Product Data").success(res);
};

module.exports = { createProduct, getAllProducts };
