const router = require("express").Router();
const {
  register,
  login,
  me,
  editProfile,
  addProfilePhoto,
  deleteProfilPhoto,
  deleteAccount,
} = require("../controllers/authControllers");
const { checkToken } = require("../middlewares/auth");
const { upload } = require("../middlewares/uploadPhoto");
router.post("/register", register);
router.post("/login", login);
router.patch("/upload-profile/:id", editProfile);
router.get("/me", checkToken, me);
router.post("/profilePhoto/:id", upload.single("profile"), addProfilePhoto);
router.delete("/profilePhoto/:id", deleteProfilPhoto);
router.delete("/deleteAccount", deleteAccount);

module.exports = router;
