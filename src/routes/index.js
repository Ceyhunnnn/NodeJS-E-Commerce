const router = require("express").Router();
const auth = require("./authRoutes");
const contactMail = require("./contactMailRoutes");
const static = require("./staticRoutes");
const products = require("./productsRoutes");
const categories = require("./categoryRoutes");
router.use(auth);
router.use(contactMail);
router.use(static);
router.use(products);
router.use(categories);

module.exports = router;
