const { Router } = require("express");

const router = Router();

const {
    renderHomepage,
    renderLoginPage,
    renderSignupPage,
    renderBlog,
} = require("../../contollers/view/public");

router.get("/", renderHomepage);
router.get("/login", renderLoginPage);
router.get("/sign-up", renderSignupPage);
router.get("/blogs/:id", renderBlog);

module.exports = router;