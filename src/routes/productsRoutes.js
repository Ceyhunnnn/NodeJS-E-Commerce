const router = require("express").Router();
const {
  createProduct,
  getCategoryProducts,
  getDiscountProducts,
} = require("../controllers/productsControllers");
router.post("/products", createProduct);
router.post("/getProducts", getCategoryProducts);
router.get("/getDiscountProducts", getDiscountProducts);

module.exports = router;
