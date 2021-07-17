const { Model } = require('sequelize');
const { commonModel, commonOptions } = require('./common');

module.exports = (sequelize, DataTypes) => {
  class UsersTypes extends Model {}
  UsersTypes.init(
    {
      ...commonModel
    },
    { sequelize, ...commonOptions, tableName: 'users_types' }
  );
  return UsersTypes;
};
