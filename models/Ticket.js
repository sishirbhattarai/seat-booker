const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Ticket extends Model {}

Ticket.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    chair_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    row: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isDecimal: true,
      }
    },
    showing_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'showing',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    in_cart: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    purchased: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'ticket',
    }
);

module.exports = Ticket;
