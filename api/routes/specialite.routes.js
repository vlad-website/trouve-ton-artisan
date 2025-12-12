const router = require("express").Router();
const specialiteController = require("../controllers/specialite.controller");

router.get("/:categorie_id", specialiteController.getByCategorie);

module.exports = router;