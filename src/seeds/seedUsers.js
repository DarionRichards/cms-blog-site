const { User } = require("../models");

const userData = [{
        firstName: "Barry",
        lastName: "Hughes",
        email: "BadmintonBarry@outlook.com",
        password: "Badminton123",
    },
    {
        firstName: "Mike",
        lastName: "O'Leary",
        email: "MotocrossMike@outlook.com",
        password: "Motocross$123",
    },
    {
        firstName: "Harry",
        lastName: "Shaw",
        email: "HockeyHarry@outlook.com",
        password: "Hockey123",
    },
    {
        firstName: "Carl",
        lastName: "Frox",
        email: "CricketCarl@outlook.com",
        password: "Cricket123",
    },
    {
        firstName: "Gary",
        lastName: "Langston",
        email: "GolfGary@outlook.com",
        password: "Golf$123",
    },
    {
        firstName: "Sam",
        lastName: "Chapman",
        email: "SwimmingSam@outlook.com",
        password: "Swimming123",
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;