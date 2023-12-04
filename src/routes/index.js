const router = require("express").Router();
const auth = require("./authRoutes");
const contactMail = require("./contactMailRoutes");
const settings = require("./settingsRoutes");
router.use(auth);
router.use(contactMail);
router.use(settings);

module.exports = router;
