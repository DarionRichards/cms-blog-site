const renderHomepage = (req, res) => {
    const { loggedIn } = req.session;
    res.render("home", { loggedIn });
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