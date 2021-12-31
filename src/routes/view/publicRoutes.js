const { Router } = require("express");

const router = Router();

const {
    renderHomepage,
    renderLoginPage,
    renderSignupPage,
} = require("../../contollers/view/public");

router.get("/", renderHomepage);
router.get("/login", renderLoginPage);
router.get("/sign-up", renderSignupPage);

module.exports = router;