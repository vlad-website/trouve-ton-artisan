const { Categorie } = require("../models");

module.exports = {
  getAll: async () => {
    return await Categorie.findAll();
  },

  getBySlug: async (slug) => {
    return await Categorie.findOne({
      where: { slug }
    });
  },
};