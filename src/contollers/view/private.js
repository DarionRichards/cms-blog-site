const { getBlogByUserId } = require("../../utils/index");

const renderDashboard = async(req, res) => {
    const { id } = req.session.user;

    const userCreatedBlogs = await getBlogByUserId(id);

    res.render("dashboard", { userCreatedBlogs });
};

const createBlog = (req, res) => {
    res.render("createBlog");
};

const editBlogById = (req, res) => {
    res.render("editBlog");
};

module.exports = {
    renderDashboard,
    createBlog,
    editBlogById,
};