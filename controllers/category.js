const { Category } = require("../models");

const categoryController = {
  getAll: async (req, res) => {
    try {
      const foundCategories = await Category.findAll();
      res.status(200).send(foundCategories);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  create: async (req, res) => {
      try {
          newCategory = await Category.create(req.body)
          res.status(200).send(newCategory)
      } catch (error) {
        res.status(500).send(error)
      }
  }
};

module.exports = categoryController