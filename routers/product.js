const routerx = require("express-promise-router");
const productController = require("../controllers/productController");

const router = routerx();
router.get("/list", productController.list);
<<<<<<< HEAD
router.get("/listCategories", productController.listByCategories);
router.get("/query", productController.query);
router.post("/add", productController.add);
router.put("/update", productController.update);
router.put("/deactivate", productController.deactivate);
router.put("/activate", productController.activate);
router.delete("/remove", productController.remove);
=======
router.get("/query", productController.query);
// router.get("/listCategories", productController.listByCategories);
>>>>>>> 30bcc7d3c4fb7e34b1b6cf901319b0473b0663de

module.exports = router;
