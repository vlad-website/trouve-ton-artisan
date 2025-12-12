const categorieService = require("../services/categorie.service");

module.exports.getAll = async (req, res) => {
  try {
    const categories = await categorieService.getAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};