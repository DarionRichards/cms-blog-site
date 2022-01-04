const renderHomepage = (req, res) => {
    res.render("home");
};
const renderLoginPage = (req, res) => {
    res.render("login");
};
const renderSignupPage = (req, res) => {
    res.render("signup");
};

module.exports = { renderHomepage, renderLoginPage, renderSignupPage };