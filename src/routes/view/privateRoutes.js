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

router.post("/create-blog", createBlog);
router.post("/edit-blog/:id", editBlogById);

module.exports = router;