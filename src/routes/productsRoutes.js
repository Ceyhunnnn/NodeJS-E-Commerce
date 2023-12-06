const router = require("express").Router();
const {
  createProduct,
  getAllProducts,
} = require("../controllers/productsControllers");
router.post("/products", createProduct);
router.get("/products-all", getAllProducts);

module.exports = router;
