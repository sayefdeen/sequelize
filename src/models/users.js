const { Model, ENUM, STRING, TEXT, INTEGER } = require('sequelize');
const { commonModel, commonOptions } = require('./common');
const { sequelize } = require('../../con');
const Posts = require('./posts');

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

Users.hasMany(Posts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
}); // be defualt it will be userId

module.exports = Users;
