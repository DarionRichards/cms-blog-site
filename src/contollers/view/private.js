const renderDashboard = (req, res) => {
    res.render("dashboard");
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