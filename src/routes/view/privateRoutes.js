const { Router } = require("express");

const router = Router();

const {
    renderDashboard,
    createBlog,
    editBlogById,
} = require("../../contollers/view/private");

router.get("/dashboard", renderDashboard);
router.get("/create-blog", createBlog);
router.get("/edit-blog/:id", editBlogById);

module.exports = router;