const APIError = require("../utils/error");
const Response = require("../utils/response");
const product = require("../models/productsModel");
const categoryModel = require("../models/categoryModel");
const createProduct = async (req, res) => {
  const category = await categoryModel.findOne({ name: req.body.category });
  const newProduct = new product({
    ...req.body,
    categoryId: category._id,
  });
  await newProduct
    .save()
    .then(() => new Response(null, "Product Created!").created(res))
    .catch(() => new APIError("Product not be created", 400));
};

const getAllProducts = async (req, res) => {
  const productData = await product.find();
  new Response(productData, "Product Data").success(res);
};

module.exports = { createProduct, getAllProducts };
