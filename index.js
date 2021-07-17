require('dotenv').config();
const app = require('express')();
const { sequelize } = require('./con');
const Posts = require('./src/models/posts');
const Users = require('./src/models/users');
const { PORT } = process.env;

app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT}`);
  await sequelize
    .authenticate()
    .then(async () => {
      console.log('data base is connected');
      await Users.sync({ force: true });
      await Posts.sync({ force: true });
    })
    .catch((err) => console.error(err));
});
