const User = require("./Users");
const Blog = require("./Blogs");
const Comment = require("./Comments");

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