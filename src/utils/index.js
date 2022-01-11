const { Blog, User, Comment } = require("../models");

const getAllBlogs = async() =>
    // get only dataValues from Blog model instance
    await Blog.findAll({ raw: true });

const getBlogById = async(blogId) =>
    await Blog.findOne({
        where: {
            id: blogId,
        },
        raw: true,
    });

const findUserById = async(userId) => {
    const user = await User.findByPk(userId, { raw: true });
    return user;
};

const findAllRelatedComments = async(blogId) => {
    const findComments = await Comment.findAll({ where: { blogId }, raw: true });
    return findComments;
};

module.exports = {
    getAllBlogs,
    getBlogById,
    findUserById,
    findAllRelatedComments,
};