const routerx = require("express-promise-router");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = routerx();

router.get("/list",authMiddleware.verifyPermission("user", "can_read"), userController.list);
router.get("/query",authMiddleware.verifyPermission("user", "can_read"), userController.query);
router.post("/add",authMiddleware.verifyPermission("user", "can_create"), userController.add);
router.put("/update",authMiddleware.verifyPermission("user", "can_update"), userController.update);
router.put("/activate",authMiddleware.verifyPermission("user", "can_activate"), userController.activate);
router.put("/deactivate", authMiddleware.verifyPermission("user", "can_deactivate"),userController.deactivate);
router.delete("/remove", authMiddleware.verifyPermission("user", "can_delete"), userController.remove);

module.exports = router;