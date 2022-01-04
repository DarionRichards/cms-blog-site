const renderDashboard = (req, res) => {
    res.render("dashboard");
};

const renderBlog = (req, res) => {
    res.render("blogs");
};

const createBlog = (req, res) => {
    res.render("createBlog");
};

const editBlogById = (req, res) => {
    res.render("editBlog");
};

module.exports = {
    renderDashboard,
    renderBlog,
    createBlog,
    editBlogById,
};