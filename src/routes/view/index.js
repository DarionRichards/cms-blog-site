const { Router } = require("express");

const router = Router();

const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");

router.use(publicRoutes);
router.use(privateRoutes);

module.exports = router;