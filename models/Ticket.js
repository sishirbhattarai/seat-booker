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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    production_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'production',
        key: 'id'
      }
    },
    showing_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'showing',
        key: 'id'
      }
    },
    seat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'seat',
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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = Ticket;
