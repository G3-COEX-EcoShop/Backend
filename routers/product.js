const routerx = require("express-promise-router");
const productController = require("../controllers/productController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = routerx();
router.get("/list", productController.list);
router.get("/listByCategory", productController.listByCategory);
router.get("/search", productController.search);
router.get("/query", productController.query);
router.post("/add", productController.add);
router.put("/update", productController.update);
router.put("/deactivate", productController.deactivate);
router.put("/activate", productController.activate);
router.delete("/remove", productController.remove);

module.exports = router;
