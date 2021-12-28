const { Blog } = require("../models");

const blogData = [{
        title: "The Motocross Whiskey Throttle",
        content: "Whiskey throtte is when you fall back on the throttle and hold it on uncontrollably and can't let go. It usually happens when you are tired and/or not holding on with your knees/legs. It usually ends up in a crash.",
        userId: 2,
    },
    {
        title: "Crickets Six Runs",
        content: "Six runs are scored if the ball does not bounce before passing over the boundary in the air, and then touches the boundary or the ground beyond it.",
        userId: 4,
    },
    {
        title: "The Golf Masters Tournament",
        content: "The Masters Tournament is one of the four major championships in professional golf. Scheduled for the first full week of April, the Masters is the first major of the year, and unlike the others,",
        userId: 5,
    },
    {
        title: "Hocket Hatrick",
        content: "When one player scores three goals in one game. Fans will honor the player by throwing their hats onto the ice.",
        userId: 3,
    },
    {
        title: "The Swimming Salute",
        content: "Drill where the hand touches head prior to entry on FC",
        userId: 6,
    },
    {
        title: "Badminton Backhand",
        content: "The badminton backhand serve starts with the weight on the back foot and shifting towards the front foot during the process of serving, this is to generate momentum and a more consistent flow for a better quality backhand serve.",
        userId: 1,
    },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;