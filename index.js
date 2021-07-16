require('dotenv').config();
const app = require('express')();
const { sequelize } = require('./con');
const Users = require('./src/models/users');
const { PORT } = process.env;

app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT}`);
  await sequelize
    .authenticate()
    .then(async () => {
      console.log('data base is connected');
      await Users(sequelize);
    })
    .catch((err) => console.error(err));
});
