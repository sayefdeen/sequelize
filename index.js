require('dotenv').config();
const app = require('express')();
const { sequelize } = require('./con');
const { Users, Posts, UsersType, Types } = require('./src/models');
const { PORT } = process.env;

const hasRelation = () => {
  const common = (options) => {
    return {
      ...options,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    };
  };

  Users.hasMany(Posts, common({ foreignKey: 'user_id' }));

  Users.belongsToMany(
    Types,
    common({
      through: 'users_types',
      foreignKey: 'user_id',
      otherKey: 'type_id'
    })
  );

  Types.belongsToMany(
    Users,
    common({
      through: 'users_types',
      foreignKey: 'type_id',
      otherKey: 'user_id'
    })
  );

  UsersType.belongsTo(Types, { foreignKey: 'type_id' });
  UsersType.belongsTo(Users, { foreignKey: 'user_id' });

  Users.hasMany(UsersType, common({ foreignKey: 'user_id' }));
  Types.hasMany(UsersType, common({ foreignKey: 'type_id' }));
};

app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT}`);
  await sequelize
    .authenticate()
    .then(async () => {
      console.log('data base is connected');
      hasRelation();
      await sequelize.sync({ force: true });
    })
    .catch((err) => console.error(err));
});
