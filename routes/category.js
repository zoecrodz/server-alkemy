const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category")

router.get("/", categoryController.getAll)
router.post("/", categoryController.create)

module.exports = router