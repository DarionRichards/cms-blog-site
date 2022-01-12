const { Router } = require("express");

const router = Router();

const {
    createBlog,
    createComment,
    editBlog,
    deleteBlog,
} = require("../../contollers/api/index");

router.post("/blog", createBlog);
router.post("/blog/:id/comment", createComment);

router.put("/blog/:id", editBlog);

router.delete("/blog/:id", deleteBlog);

module.exports = router;