const express = require("express");
const router = express.Router();
const postController = require("../controllers/post")

router.get("/", postController.getAll)
router.get("/:id", postController.getById)
router.post("/", postController.create)
router.patch("/:id", postController.edit)
router.delete("/:id", postController.delete)

module.exports = router
