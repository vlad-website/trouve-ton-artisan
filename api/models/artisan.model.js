const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Artisan = sequelize.define("Artisan", {
  id_artisan: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  nom: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  localisation: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  email: {
    type: DataTypes.STRING(150),
    allowNull: false
  },

  site_web: {
    type: DataTypes.STRING(150),
    allowNull: true
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  note: {
    type: DataTypes.DECIMAL(2,1),
    allowNull: false
  },

  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },

  specialite_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  top: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: "artisan",
  timestamps: false
});

module.exports = Artisan;