const { Post, Category } = require("../models");

const postController = {
  getAll: async (req, res) => {
    try {
      const foundPosts = await Post.findAll();
      res.status(200).send(foundPosts);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getById: async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id);
      res.status(200).send(post);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  create: async (req, res) => {
    const { title, content, picture } = req.body;
    try {
      const newPost = await Post.create({
        title,
        content,
        picture,
      });
      if (req.body.category) {
        const category = await Category.findOne({
          where: { name: req.body.category.name },
        });
        if (category) category.addPost(newPost);
      }
      res.status(200).send(newPost);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  edit: async (req, res) => {
    try {
      const editedPost = await Post.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send(editedPost);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const deleted = Post.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send(deleted);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = postController;
