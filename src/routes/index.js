const router = require("express").Router();
const auth = require("./authRoutes");
const contactMail = require("./contactMailRoutes");
router.use(auth);
router.use(contactMail);

module.exports = router;
