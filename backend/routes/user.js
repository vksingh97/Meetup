const express = require("express");
const { register, login, followUser } = require("../controller/user");
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/follow/:id").get(isAuthenticated, followUser);

module.exports = router;
