const router = require("express").Router();
const {
  createProduct,
  getCategoryProducts,
  getDiscountProducts,
  getAllProducts,
  getProductDetail,
} = require("../controllers/productsControllers");
router.post("/products", createProduct);
router.post("/allProducts", getAllProducts);
router.post("/getProducts", getCategoryProducts);
router.get("/getDiscountProducts", getDiscountProducts);
router.get("/productDetail/:id", getProductDetail);

module.exports = router;
