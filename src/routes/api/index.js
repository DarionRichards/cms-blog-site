const { Router } = require("express");

const router = Router();

const {
    createBlog,
    editBlog,
    deleteBlog,
} = require("../../contollers/api/index");

router.post("/blog", createBlog);

router.put("/blog/:id", editBlog);

router.delete("/blog/:id", deleteBlog);

module.exports = router;