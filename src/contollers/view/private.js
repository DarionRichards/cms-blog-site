const { getBlogByUserId, getBlogById } = require("../../utils/index");

const renderDashboard = async(req, res) => {
    const { id } = req.session.user;

    const userCreatedBlogs = await getBlogByUserId(id);

    res.render("dashboard", { userCreatedBlogs });
};

const createBlog = (req, res) => {
    res.render("createBlog");
};

const editBlogById = async(req, res) => {
    const { id } = req.params;

    const blog = await getBlogById(id);

    res.render("editBlog", { blog });
};

module.exports = {
    renderDashboard,
    createBlog,
    editBlogById,
};