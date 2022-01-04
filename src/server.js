require("dotenv").config();
const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");

const PORT = process.env.PORT || 4000;

const handlebars = expressHandlebars.create({});
const app = express();

const connection = require("./config/connection");
const routes = require("./routes");

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "../public")));
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