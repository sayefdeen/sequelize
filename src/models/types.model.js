const { Model } = require('sequelize');
const { commonModel, commonOptions } = require('./common');

module.exports = (sequelize, DataTypes) => {
  const { ENUM } = DataTypes;
  class Types extends Model {}

  Types.init(
    {
      ...commonModel,
      type: {
        type: ENUM(['type1', 'type2', 'type3', 'type4']),
        allowNull: false,
        unique: true,
        defaultValue: 'type1'
      }
    },
    { ...commonOptions, sequelize, tableName: 'types' }
  );
  Posts.beforeSync();
  Posts.afterSync();
  return Types;
};
