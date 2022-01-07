const { Router } = require("express");

const router = Router();

const view = require("./view");
const auth = require("./auth");

router.use("/auth", auth);
router.use("/", view);

module.exports = router;