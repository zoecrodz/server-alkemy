const express = require("express");
const router = express.Router();
const post = require("./post")
const category = require("./category")

router.use("/posts", post)
router.use("/category", category)

module.exports = router;