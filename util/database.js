const Sequelize = require("sequelize");

// dbname,id,pass
const sequelize = new Sequelize("node-complete", "root", "maaz882000", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
