const router = require("express").Router();
const categorieController = require("../controllers/categorie.controller");

router.get("/slug/:slug", categorieController.getOneBySlug);
router.get("/", categorieController.getAll);

module.exports = router;