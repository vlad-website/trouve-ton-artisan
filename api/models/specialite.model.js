const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Specialite = sequelize.define("Specialite", {
  id_specialite: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  nom: {
    type: DataTypes.STRING(50),
    allowNull: false
  },

  categorie_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: "specialite",
  timestamps: false
});

module.exports = Specialite;