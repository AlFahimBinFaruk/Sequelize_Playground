const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('my-db', 'fahim', 'pass',{
  dialect: "sqlite",
  host: "./db/database.sqlite",
});

module.exports = sequelize;
