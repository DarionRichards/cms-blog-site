const { Comment } = require("../models");

const commentData = [{
        text: "Great Work Mike!",
        blogId: 1,
        userId: 1,
    },
    {
        text: "Great Work Carl!",
        blogId: 2,
        userId: 2,
    },
    {
        text: "Great Work Gary!",
        blogId: 3,
        userId: 3,
    },
    {
        text: "Great Work Harry!",
        blogId: 4,
        userId: 4,
    },
    {
        text: "Great Work Sam!",
        blogId: 5,
        userId: 5,
    },
    {
        text: "Great Work Barry!",
        blogId: 6,
        userId: 6,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;