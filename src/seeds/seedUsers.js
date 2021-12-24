const { User } = require("../models");

const userData = [{
        username: "BadmintonBarry",
        password: "Badminton123",
    },
    {
        username: "MotocrossMike",
        password: "Motocross$123",
    },
    {
        username: "HockeyHarry",
        password: "Hockey123",
    },
    {
        username: "CricketCarl",
        password: "Cricket123",
    },
    {
        username: "GolfGary",
        password: "Golf$123",
    },
    {
        username: "SwimmingSam",
        password: "Swimming123",
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;