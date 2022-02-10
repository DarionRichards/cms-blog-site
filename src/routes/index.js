const { Router } = require("express");

const router = Router();

const auth = require("./auth");
const view = require("./view");
const api = require("./api");

router.use("/auth", auth);
router.use("/api", api);
router.use("/", view);

module.exports = router;