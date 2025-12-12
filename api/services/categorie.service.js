const { Categorie } = require("../models");

module.exports.getAll = async () => {
  return await Categorie.findAll();
};