require('dotenv').config();
const { Sequelize } = require('sequelize');
const app = require('express')();
const { PORT, DB_HOST, DB_USERNAME, DB_PASS, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASS, {
  host: DB_HOST,
  dialect: 'postgres'
});

app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT}`);
  await sequelize
    .authenticate()
    .then(() => console.log('data base is connected'))
    .catch((err) => console.error(err));
});
