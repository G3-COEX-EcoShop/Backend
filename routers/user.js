const routerx = require("express-promise-router");
const userController = require("../controllers/userController");

const router = routerx();
router.get("/list", userController.list);
router.get("/query", userController.query);
router.post("/create", userController.create);
router.put("/update", userController.update);
router.put("/deactivate", userController.deactivate);
router.put("/activate", userController.activate);
router.delete("/remove", userController.remove);

module.exports = router;