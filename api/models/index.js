const sequelize = require("../config/db");

const Categorie = require("./categorie.model");
const Specialite = require("./specialite.model");
const Artisan = require("./artisan.model");

Categorie.hasMany(Specialite, { foreignKey: "categorie_id" });
Specialite.belongsTo(Categorie, { foreignKey: "categorie_id" });

Specialite.hasMany(Artisan, { foreignKey: "specialite_id" });
Artisan.belongsTo(Specialite, { foreignKey: "specialite_id" });

module.exports = { sequelize, Categorie, Specialite, Artisan };