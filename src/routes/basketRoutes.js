const router = require("express").Router();
const {
  createBasket,
  getUserBasket,
  updateBasket,
  deleteBasketItem,
} = require("../controllers/basketController");
router.post("/createBasket/:id", createBasket);
router.get("/getUserBasket/:id", getUserBasket);
router.patch("/updateBasket/:id", updateBasket);
router.delete("/deleteBasketItem", deleteBasketItem);
module.exports = router;
