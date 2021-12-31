const renderDashboard = (req, res) => {
    res.send("Dashboard");
};

const renderBlog = (req, res) => {
    res.send("Blog by ID");
};

const createBlog = (req, res) => {
    res.send("Create a blog");
};

const editBlogById = (req, res) => {
    res.send("Edit a blog by ID");
};

module.exports = {
    renderDashboard,
    renderBlog,
    createBlog,
    editBlogById,
};