const specialiteService = require("../services/specialite.service");

module.exports.getByCategorie = async (req, res) => {
  try {
    const { categorie_id } = req.params;

    const specialites = await specialiteService.getByCategorie(categorie_id);

    res.status(200).json(specialites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};