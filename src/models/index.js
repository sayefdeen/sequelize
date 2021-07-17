const { sequelize, DataTypes } = require('../../con');
const Posts = require('./posts')(sequelize, DataTypes);
const Types = require('./types.model')(sequelize, DataTypes);
const Users = require('./users')(sequelize, DataTypes);
const UsersType = require('./users_types.model')(sequelize, DataTypes);
module.exports = {
  Posts,
  Types,
  Users,
  UsersType
};
