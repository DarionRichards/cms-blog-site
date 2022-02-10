require("dotenv").config();

// seed functions
const seedUsers = require("./seedUsers");
const seedBlogs = require("./seedBlogs");
const seedComments = require("./seedComments");

const sequelize = require("../config/connection");

const seedAll = async() => {
    try {
        await sequelize.sync({ force: true });
        console.log("\n---- DATABASE SYNCED ----\n");

        await seedUsers();
        console.log("\n---- USERS SEEDED ----\n");

        await seedBlogs();
        console.log("\n---- BLOGS SEEDED ----\n");

        await seedComments();
        console.log("\n---- COMMENTS SEEDED ----\n");

        console.log("\n---- FINISHED SEEDING ----\n");
        process.exit(0);
    } catch (error) {
        console.log(error);
    }
};

seedAll();