const Category = require("./Category")
const Post = require("./Post")

// Post.belongsTo(Category)
Category.hasMany(Post)

module.exports = { Post, Category }