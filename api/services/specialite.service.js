const { Specialite } = require("../models");

module.exports = {
  getByCategorie: async (categorieId) => {
    return await Specialite.findAll({
      where: { categorie_id: categorieId }
    });
  }
};
