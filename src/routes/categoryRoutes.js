const router = require("express").Router();
const {
  getCategory,
  createCategory,
} = require("../controllers/categoryController");
router.post("/category", createCategory);
router.get("/categories", getCategory);

module.exports = router;
