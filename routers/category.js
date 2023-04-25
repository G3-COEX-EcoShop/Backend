const routerx = require("express-promise-router");
const categoryController = require("../controllers/categoryController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = routerx();

router.get("/list", categoryController.list);
router.get("/listByCategory", categoryController.listByCategory);
router.get("/query", categoryController.query);
router.post(
  "/add",
  authMiddleware.verifyPermission("category", "create"),
  categoryController.add
);
router.put(
  "/update",
  authMiddleware.verifyPermission("category", "update"),
  categoryController.update
);
router.put(
  "/activate",
  authMiddleware.verifyPermission("category", "activate"),
  categoryController.activate
);
router.put(
  "/deactivate",
  authMiddleware.verifyPermission("category", "deactivate"),
  categoryController.deactivate
);
router.delete(
  "/remove",
  authMiddleware.verifyPermission("category", "delete"),
  categoryController.remove
);

module.exports = router;
