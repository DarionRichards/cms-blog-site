const { Blog } = require("../../models");

const createBlog = async(req, res) => {
    const { id } = req.session.user;
    const { blogTitle, blogContent } = req.body;

    try {
        if (!blogTitle || !blogContent) {
            return res.status(422).json({
                sucess: false,
                error: "Oops! Blog title or content was not a valid string",
            });
        } else {
            const newBlog = await Blog.create({
                title: blogTitle,
                content: blogContent,
                userId: id,
            });

            return res.status(200).json({
                success: true,
                data: newBlog,
            });
        }
    } catch (error) {
        return res.status(500).json({
            sucess: false,
            error: error.message,
        });
    }
};

module.exports = { createBlog };