const { Router } = require("express");

const router = Router();

const auth = require("../../middleware/auth");
const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");

router.use(publicRoutes);
router.use(auth, privateRoutes);

module.exports = router;