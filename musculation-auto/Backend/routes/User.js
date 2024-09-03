const express = require("express");
const router = express.Router();
const auth = require("../middleware/Auth");
const userCtrl = require("../controllers/User");
const sessionCtrl = require("../controllers/Workoutsession");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/user/sessions/exist", auth, userCtrl.checkSessionExists);
router.post("/saveWorkoutSession", auth, sessionCtrl.saveWorkoutSession);

module.exports = router;
