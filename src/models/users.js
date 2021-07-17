const { Model } = require('sequelize');
const { commonModel, commonOptions } = require('./common');
const Posts = require('./posts');

module.exports = (sequelize, DataTypes) => {
  const { ENUM, STRING, TEXT } = DataTypes;
  class Users extends Model {}
  Users.init(
    {
      ...commonModel,
      firstName: {
        type: STRING({ length: 256 }),
        allowNull: false,
        unique: true,
        field: 'first_name'
      },
      about: {
        type: TEXT,
        allowNull: true
      },
      email: {
        type: STRING({ length: 256 }),
        unique: true,
        allowNull: false
      },
      role: {
        type: ENUM(['user', 'admin']),
        defaultValue: 'user'
      }
    },
    { sequelize, ...commonOptions, tableName: 'users' }
  );
  Users.beforeSync(() => console.log('b4 creating the user table'));
  Users.afterSave(() => console.log('after creating the users table'));

  return Users;
};
