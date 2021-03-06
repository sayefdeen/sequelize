require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DataTypes } = require('sequelize');

const init = () => {
  const { PORT, DB_HOST, DB_USERNAME, DB_PASS, DB_NAME } = process.env;

  const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASS, {
    host: DB_HOST,
    dialect: 'postgres',
    logging: false
  });
  return sequelize;
};

module.exports = { sequelize: init(), DataTypes };
