const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Showing extends Model {}

Showing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    production_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'production',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'showing',
  }
);

module.exports = Showing;
