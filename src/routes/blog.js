const router = require("express").Router();

const {
  createBlog,
  getAllBlogs,
  getBlogDetails,
  editBlog,
  deleteBlog,
} = require("../controllers/blog");

// get all blogs
router.get("/", getAllBlogs);

// get all blogs
router.get("/:blogId", getBlogDetails);

// create new blog
router.post("/create", createBlog);

// edit blog
router.patch("/edit/:blogId", editBlog);

// delete blog
router.delete("/delete/:blogId", deleteBlog);

module.exports = router;
