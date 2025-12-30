const router = require("express").Router();
const artisanController = require("../controllers/artisan.controller");

router.get("/", artisanController.getAll);
router.get("/categorie/:slug", artisanController.getByCategorieSlug);
router.get("/top", artisanController.getTop);
router.get("/search", artisanController.search);
router.get("/:id", artisanController.getOne);

module.exports = router;