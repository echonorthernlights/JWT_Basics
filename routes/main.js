const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const { login, dashboard, dashboard2 } = require("../controllers/main");

router.route("/login").post(login);
router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/dashboard2").get(authMiddleware, dashboard2);

module.exports = router;
