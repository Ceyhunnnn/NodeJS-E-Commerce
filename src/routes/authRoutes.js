const router = require("express").Router();
const {
  register,
  login,
  me,
  uploadProfile,
} = require("../controllers/authControllers");
const { checkToken } = require("../middlewares/auth");
router.post("/register", register);
router.post("/login", login);
router.patch("/upload-profile/:id", uploadProfile);
router.get("/me", checkToken, me);
module.exports = router;
