const Blog = require("../models/blog");

// get all blogs
const getAllBlogs = async (req, res) => {
  // find all blogs
  let blogList = await Blog.findAll();
  // send res
  res.status(200).json(blogList);
};

// get blog details by blogId
const getBlogDetails = async (req, res) => {
  const blogId = req.params.blogId;

  let blog = await Blog.findOne({ where: { blogId } });

  res.status(200).json(blog);
};

// create new blog
const createBlog = async (req, res) => {
  // get data from req.body
  let { title, description } = req.body;
  // create it
  let newBlog = await Blog.create({ title, description });
  // send res
  res.status(200).json(newBlog);
};

// edit blog by blogId
const editBlog = async (req, res) => {
  const blogId = req.params.blogId;

  //   option 01
  //   let blog = await Blog.findOne({ where: { blogId } });
  //   blog
  //     .update(req.body)
  //     .then((res) => {
  //       res.status(200).json({ msg: res });
  //     })
  //     .catch((err) => {
  //       res.status(404).json(err);
  //     });

  //   option 02
  // update blog
  await Blog.update(req.body, { where: { blogId } });

  //   send res
  res.status(200).json({ msg: "udpated", blogId });
};

// delete blog by blogId
const deleteBlog = async (req, res) => {
  const blogId = req.params.blogId;
  // delete blog
  await Blog.destroy({ where: { blogId } });
  // send res
  res.status(200).json({ msg: "deleted", blogId });
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogDetails,
  editBlog,
  deleteBlog,
};
