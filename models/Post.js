const db = require("../db")
const S = require("sequelize")

class Post extends S.Model {}

Post.init(
    {
        title: {
            type: S.STRING,
            allowNull: false
        },
        content: {
            type: S.TEXT,
            allowNull: false
        },
        picture: {
            type: S.STRING,
            allowNull: true
        }
    },
    { sequelize: db, modelName: "post" }
)

module.exports = Post