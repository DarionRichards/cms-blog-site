const { Blog, Comment } = require("../../models");

const createBlog = async(req, res) => {
    const { id } = req.session.user;
    const { blogTitle, blogContent } = req.body;

    try {
        if (!blogTitle || !blogContent) {
            return res.status(422).json({
                sucess: false,
                status: 422,
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

const createComment = async(req, res) => {
    const blogId = req.params;
    const { comment } = req.body;
    const { user } = req.session;

    try {
        if (!comment) {
            return res.status(422).json({
                success: false,
                error: "Comment was not a valid string",
            });
        }
        const newComment = await Comment.create({
            text: comment,
            blogId: blogId.id,
            userId: user.id,
        });

        return res.status(200).json({
            success: true,
            data: newComment,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

const editBlog = async(req, res) => {
    const { id } = req.params;
    const { blogTitle, blogContent } = req.body;

    try {
        if (!blogTitle || !blogContent) {
            return res.status(422).json({
                success: false,
                error: "Title or content cannot be empty",
            });
        }

        await Blog.update({
            title: blogTitle,
            content: blogContent,
        }, {
            where: {
                id: id,
            },
        });

        return res
            .status(200)
            .json({ success: true, data: "Blog updated successfully" });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

const deleteBlog = async(req, res) => {
    const { id } = req.params;

    try {
        await Blog.destroy({ where: { id } });

        return res
            .status(200)
            .json({ success: true, data: "Blog successfully deleted" });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

module.exports = { createBlog, createComment, editBlog, deleteBlog };