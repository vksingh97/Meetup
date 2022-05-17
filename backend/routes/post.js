const express = require("express");
const { createPost, likeAndUnlikePost } = require("../controller/post");
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);
router.route("/post/:id").get(isAuthenticated, likeAndUnlikePost);

module.exports = router;
