const { Router } = require("express");

const router = Router();

const { login, signup, logout } = require("../../contollers/auth/index");

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

module.exports = router;