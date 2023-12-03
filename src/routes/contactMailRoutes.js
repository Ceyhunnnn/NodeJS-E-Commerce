const router = require("express").Router();

const { contactMail } = require("../controllers/contactMailController");

router.post("/contactMail", contactMail);

module.exports = router;
