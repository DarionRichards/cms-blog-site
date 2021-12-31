require("dotenv").config();

const express = require("express");

const PORT = process.env.PORT || 4000;

const connection = require("./config/connection");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const init = async() => {
    try {
        await connection.sync({ force: false });

        app.listen(PORT, () =>
            console.log(`🚀🚀 Server running on http://localhost:${PORT} 🚀🚀`)
        );
    } catch (err) {
        console.log(`[ERROR]: Connection to DB failes - ${err.message}`);
    }
};

init();