const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Technology extends Model {}

Technology.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    badge_element: {
      type: DataTypes.STRING(5000),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'technology',
  }
);

module.exports = Technology;
