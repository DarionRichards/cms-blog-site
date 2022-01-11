const {
    getAllBlogs,
    getBlogById,
    findAllRelatedComments,
    findUserById,
} = require("../../utils");

const { mergeArrayObjects } = require("../../helpers");

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

const renderBlog = async(req, res) => {
    const { loggedIn } = req.session;
    // get blogId
    const { id } = req.params;

    const blog = await getBlogById(id);
    const blogAuthor = await findUserById(blog.userId);

    const findComments = await findAllRelatedComments(blog.id);

    const unresolvedAuthors = findComments.map(
        async(each) => await findUserById(each.userId)
    );
    const reslovedAuthors = await Promise.all(unresolvedAuthors);

    const commentsArray = mergeArrayObjects(reslovedAuthors, findComments);

    const comments = commentsArray.map((each) => {
        return {
            comment: each.text,
            author: `${each.firstName} ${each.lastName}`,
            email: each.email,
        };
    });

    res.render("blogs", {
        loggedIn,
        blog,
        blogAuthor,
        comments,
    });
};

module.exports = {
    renderHomepage,
    renderLoginPage,
    renderSignupPage,
    renderBlog,
};