const { Router } = require("express");

const router = Router();

const { createBlog } = require("../../contollers/api/index");

router.post("/blog", createBlog);

module.exports = router;