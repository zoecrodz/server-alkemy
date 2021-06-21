const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "postgres:/alkemyserver",
  {
    logging: false,
    dialect: "postgres",
  }
);

module.exports = sequelize;