const { Model, STRING, TEXT } = require('sequelize');
const { commonModel, commonOptions } = require('./common');
const { sequelize } = require('../../con');

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

Posts.beforeSync(() => console.log('b4 the creating of the posts table'));
Posts.afterSync(() => console.log('after the creating of the posts table'));

module.exports = Posts;
