const routerx = require("express-promise-router");
const productController = require("../controllers/productController");

const router = routerx();
router.get("/list", productController.list);
router.get("/query", productController.query);
// router.get("/listCategories", productController.listByCategories);

module.exports = router;
