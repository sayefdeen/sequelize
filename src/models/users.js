const { Model } = require('sequelize');
const { commonModel, commonOptions } = require('./common');

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
  return Users;
};
