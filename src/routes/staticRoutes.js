const router = require("express").Router();
const {
  createStatic,
  getAllStatic,
} = require("../controllers/staticController");
router.post("/static", createStatic);
router.get("/static", getAllStatic);

module.exports = router;
