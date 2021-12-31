const renderHomepage = (req, res) => {
    res.send("Homepage");
};
const renderLoginPage = (req, res) => {
    res.send("Login Page");
};
const renderSignupPage = (req, res) => {
    res.send("Signup Page");
};

module.exports = { renderHomepage, renderLoginPage, renderSignupPage };