const { Router } = require("express");

const router = Router();

const {
    renderDashboard,
    renderBlog,
    createBlog,
    editBlogById,
} = require("../../contollers/view/private");

router.get("/dashboard", renderDashboard);
router.get("/blogs/:id", renderBlog);
router.get("/create-blog", createBlog);
router.get("/edit-blog/:id", editBlogById);

module.exports = router;