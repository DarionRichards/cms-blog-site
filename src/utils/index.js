const { Blog } = require("../models");

const getAllBlogs = async() => {
    try {
        // get only dataValues from Blog model instance
        const blog = await Blog.findAll({ raw: true });
        return blog;
    } catch (error) {
        return error;
    }
};

module.exports = { getAllBlogs };