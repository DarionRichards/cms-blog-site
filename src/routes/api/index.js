const { Router } = require("express");

const router = Router();

const { createBlog, editBlog } = require("../../contollers/api/index");

router.post("/blog", createBlog);

router.put("/blog/:id", editBlog);

module.exports = router;