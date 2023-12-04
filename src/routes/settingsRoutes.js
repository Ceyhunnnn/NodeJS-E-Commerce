const router = require("express").Router();
const {
  createSettings,
  getAllSettings,
} = require("../controllers/settingsController");
router.post("/settings", createSettings);
router.get("/settings", getAllSettings);

module.exports = router;
