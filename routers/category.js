const routerx = require("express-promise-router");
const categoryController = require("../controllers/categoryController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = routerx();
router.get("/list", categoryController.list);

router.post("/add", authMiddleware.verifyUsuario, categoryController.add);

// router.get('/query', authMiddleware.verifyUsuario, categoryController.query);
// router.put('/update', authMiddleware.verifyUsuario, categoryController.update);
// router.delete('/remove', authMiddleware.verifyAdministrador, categoryController.remove);
router.put(
  "/activate",
  authMiddleware.verifyUsuario,
  categoryController.activate
);
// router.put('/deactivate', authMiddleware.verifyUsuario, categoryController.deactivate);

module.exports = router;
