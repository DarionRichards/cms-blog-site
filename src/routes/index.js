const { Router } = require("express");

const router = Router();

// const view = require("./view");
const auth = require("./auth");

// router.use("/", view);
router.use("/auth", auth);

module.exports = router;