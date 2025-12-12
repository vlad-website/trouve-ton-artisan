const artisanService = require("../services/artisan.service");

// GET /artisans
module.exports.getAll = async (req, res) => {
  try {
    const artisans = await artisanService.getAll();
    res.status(200).json(artisans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /artisans/categorie/:id
module.exports.getByCategorie = async (req, res) => {
  try {
    const categorieId = req.params.id;
    const artisans = await artisanService.getByCategorie(categorieId);
    res.status(200).json(artisans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /artisans/top
module.exports.getTop = async (req, res) => {
  try {
    const artisans = await artisanService.getTop();
    res.status(200).json(artisans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /artisans/:id
module.exports.getOne = async (req, res) => {
  try {
    const artisan = await artisanService.getOne(req.params.id);

    if (!artisan) {
      return res.status(404).json({ message: "Artisan non trouvé" });
    }

    res.status(200).json(artisan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /artisans/search?nom=...
module.exports.search = async (req, res) => {
  try {
    const term = req.query.nom || "";

    const artisans = await artisanService.searchByNom(term);
    res.status(200).json(artisans);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};