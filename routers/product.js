const routerx = require("express-promise-router");
const productController = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = routerx();


router.get("/list",productController.list);
router.get("/listCategories", productController.listByCategories);
router.get("/search", productController.search);
router.get("/query", productController.query);
router.post("/add",authMiddleware.verifyPermission("product", "can_create"), productController.add);
router.put("/update", authMiddleware.verifyPermission("product", "can_update"), productController.update);
router.put("/activate",authMiddleware.verifyPermission("product", "can_activate"),  productController.activate);
router.put("/deactivate",authMiddleware.verifyPermission("product", "can_deactivate"), productController.deactivate);
router.delete("/remove",authMiddleware.verifyPermission("product", "can_delete"), productController.remove);

module.exports = router;
