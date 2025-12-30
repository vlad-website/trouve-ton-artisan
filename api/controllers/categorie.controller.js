const categorieService = require("../services/categorie.service");

module.exports.getAll = async (req, res) => {
  try {
    const categories = await categorieService.getAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getOneBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const categorie = await categorieService.getBySlug(slug);

    if (!categorie) {
      return res.status(404).json({ message: "Categorie non trouvée" });
    }

    res.status(200).json(categorie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};