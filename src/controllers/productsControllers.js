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

const getCategoryProducts = async (req, res) => {
  const { id } = req.body;
  const productData = await product.find({ categoryId: id });
  new Response(productData, "Product Data").success(res);
};

const getDiscountProducts = async (req, res) => {
  const discount = await product.find({ discount: { $gt: 0 } });
  if (discount) {
    new Response(discount, "Discount Products").success(res);
  }
};

module.exports = { createProduct, getCategoryProducts, getDiscountProducts };
