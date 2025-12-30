const { Artisan, Specialite, Categorie } = require("../models");
const { Op } = require("sequelize");

module.exports = {

  // Toutes les artisans
  getAll: async () => {
    return await Artisan.findAll({
      include: [
        {
          model: Specialite,
          include: [Categorie]
        }
      ]
    });
  },

  // Par catégorie
  getByCategorie: async (categorieId) => {
    return await Artisan.findAll({
      include: [
        {
          model: Specialite,
          required: true,
          include: [
            {
              model: Categorie,
              required: true,
              where: { id_categorie: categorieId }
            }
          ]
        }
      ]
    });
  },

  // Top 3 artisans du mois
  getTop: async () => {
    return await Artisan.findAll({
      where: { top: true },
      limit: 3,
      order: [["note", "DESC"]],
      include: [
        {
          model: Specialite,
          include: [Categorie]
        }
      ]
    });
  },

  // Un artisan
  getOne: async (id) => {
    return await Artisan.findByPk(id, {
      include: [
        {
          model: Specialite,
          include: [Categorie]
        }
      ]
    });
  },

  // Recherche par nom
  searchByNom: async (term) => {
    return await Artisan.findAll({
      where: {
        nom: { [Op.like]: `%${term}%` }
      },
      order: [["note", "DESC"]],
      include: [
        {
          model: Specialite,
          include: [Categorie]
        }
      ]
    });
  },

  getByCategorieSlug: async (slug) => {
    return await Artisan.findAll({
      include: [
        {
          model: Specialite,
          required: true,
          include: [
            {
              model: Categorie,
              required: true,
              where: { slug }
            }
          ]
        }
      ],
      order: [["note", "DESC"]]
    });
  }
};