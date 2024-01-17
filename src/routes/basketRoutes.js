const router = require("express").Router();
const {
  createBasket,
  getUserBasket,
  updateBasket,
  deleteBasketItem,
  addItemToBasket,
  createOrder,
  getUserOrderList,
} = require("../controllers/basketController");
router.post("/createBasket/:id", createBasket);
router.get("/getUserBasket/:id", getUserBasket);
router.patch("/updateBasket/:id", updateBasket);
router.delete("/deleteBasketItem", deleteBasketItem);
router.post("/addItemToBasket", addItemToBasket);
router.post("/createOrder", createOrder);
router.get("/getOrder", getUserOrderList);
module.exports = router;
