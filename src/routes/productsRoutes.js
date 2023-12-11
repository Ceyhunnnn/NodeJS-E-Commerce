const router = require("express").Router();
const {
  createProduct,
  getAllProducts,
} = require("../controllers/productsControllers");
router.post("/products", createProduct);
router.get("/products", getAllProducts);

module.exports = router;
