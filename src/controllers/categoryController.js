const categories = require("../models/categoryModel");
const Response = require("../utils/response");
const APIError = require("../utils/error");
const getCategory = async (req, res) => {
  const categoryList = await categories.find({});
  if (categoryList.length) {
    new Response(categoryList, "Category Data").success(res);
  }
};
const createCategory = async (req, res) => {
  const categoryData = new categories(req.body);
  await categoryData
    .save()
    .then(() => new Response(null, "Created category").created(res))
    .catch(() => new APIError("Not Created", 400));
};
module.exports = { getCategory, createCategory };
