const { getAllBlogs } = require("../../utils");

const renderHomepage = async(req, res) => {
    const { loggedIn } = req.session;

    const blog = await getAllBlogs();

    if (blog) {
        return res.render("home", { loggedIn, blog });
    }

    return res.render("home", { loggedIn });
};
const renderLoginPage = (req, res) => {
    res.render("login");
};
const renderSignupPage = (req, res) => {
    res.render("signup");
};

const renderBlog = (req, res) => {
    const { loggedIn } = req.session;
    res.render("blogs", { loggedIn });
};

module.exports = {
    renderHomepage,
    renderLoginPage,
    renderSignupPage,
    renderBlog,
};