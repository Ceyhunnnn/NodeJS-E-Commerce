const router = require("express").Router();
const {
  createBasket,
  getUserBasket,
  updateBasket,
} = require("../controllers/basketController");
router.post("/createBasket/:id", createBasket);
router.get("/getUserBasket/:id", getUserBasket);
router.patch("/updateBasket/:id", updateBasket);

module.exports = router;
