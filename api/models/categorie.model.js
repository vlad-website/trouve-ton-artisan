const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Categorie = sequelize.define("Categorie", {
  id_categorie: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  nom: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  }
}, {
  tableName: "categorie",
  timestamps: false
});

module.exports = Categorie;