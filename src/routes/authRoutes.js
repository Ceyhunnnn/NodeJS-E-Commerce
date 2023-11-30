const router = require("express").Router();
const { register, login, me } = require("../controllers/authControllers");
const { checkToken } = require("../middlewares/auth");
router.post("/register", register);
router.post("/login", login);
router.get("/me", checkToken, me);
module.exports = router;
