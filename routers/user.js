const routerx = require("express-promise-router");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = routerx();

router.get("/list", userController.list);
router.get("/query",userController.query);
router.post("/add",authMiddleware.verifyPermission("user", "create"), userController.add);
router.put("/update",authMiddleware.verifyPermission("user", "update"), userController.update);
router.put("/activate",authMiddleware.verifyPermission("user", "activate"), userController.activate);
router.put("/deactivate", authMiddleware.verifyPermission("user", "deactivate"),userController.deactivate);
router.delete("/remove", authMiddleware.verifyPermission("user", "delete"), userController.remove);

module.exports = router;