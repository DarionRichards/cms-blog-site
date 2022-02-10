const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

// User hasMany Blogs
// Blog belongsTo User
User.hasMany(Blog, {
    foreignKey: "userId",
});
Blog.belongsTo(User, {
    foreignKey: "userId",
    onDelete: "CASCADE",
});

// Blog hasMany Comments
// Comment belongsTo Blog
Blog.hasMany(Comment, {
    foreignKey: "blogId",
});
Comment.belongsTo(Blog, {
    foreignKey: "blogId",
    onDelete: "CASCADE",
});

// User hasMany Comments
// Comments belongTo User
User.hasMany(Comment, {
    foreignKey: "userId",
});
Comment.belongsTo(User, {
    foreignKey: "userId",
    onDelete: "CASCADE",
});

module.exports = {
    User,
    Blog,
    Comment,
};