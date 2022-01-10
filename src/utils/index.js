const { Blog } = require("../models");

const getAllBlogs = async() =>
    // get only dataValues from Blog model instance
    await Blog.findAll({ raw: true });

module.exports = { getAllBlogs };