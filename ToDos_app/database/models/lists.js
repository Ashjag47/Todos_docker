'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    Lists.hasMany(models.Tasks, {
      foreignKey: 'listId',
    });
    }
  }
  Lists.init({
    name: DataTypes.STRING,
    userId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Lists',
  });
  return Lists;
};