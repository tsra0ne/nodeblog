const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const blogController = require('../controllers/blogController');


router.get("/", blogController.blog_index);
router.post("/", blogController.blog_create);
router.get("/create", blogController.blog_create_get);
router.get("/:id", blogController.blog_details_get);
router.delete("/:id", blogController.blog_details_delete);

module.exports = router;