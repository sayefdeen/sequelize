const { Model, ENUM, STRING, TEXT, INTEGER } = require('sequelize');
const { commonModel, commonOptions } = require('./common');

class Users extends Model {}

module.exports = (sequelize) => {
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
  return Users.sync({ force: true })
    .then(() => console.log('Created The User TAble'))
    .catch(console.error);
};
