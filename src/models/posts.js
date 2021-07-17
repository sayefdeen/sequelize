const { Model } = require('sequelize');
const { commonModel, commonOptions } = require('./common');

module.exports = (sequelize, DataTypes) => {
  const { STRING, TEXT } = DataTypes;
  class Posts extends Model {}

  Posts.init(
    {
      ...commonModel,
      title: {
        type: STRING({ length: 265 }),
        unique: true,
        allowNull: false
      },
      body: {
        type: TEXT,
        allowNull: false
      }
    },
    { sequelize, ...commonOptions, tableName: 'posts' }
  );
  return Posts;
};
