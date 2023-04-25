const routerx = require("express-promise-router");
const productController = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = routerx();
router.get("/list", productController.list);
router.get("/listByCategory", productController.listByCategory);
router.get("/search", productController.search);
router.get("/query", productController.query);

router.post(
  "/add",
  authMiddleware.verifyPermission("product", "create"),
  productController.add
);

router.put(
  "/update",
  authMiddleware.verifyPermission("product", "update"),
  productController.update
);

router.put(
  "/activate",
  authMiddleware.verifyPermission("product", "activate"),
  productController.activate
);

router.put(
  "/deactivate",
  authMiddleware.verifyPermission("product", "deactivate"),
  productController.deactivate
);

router.delete(
  "/remove",
  authMiddleware.verifyPermission("product", "delete"),
  productController.remove
);

module.exports = router;
