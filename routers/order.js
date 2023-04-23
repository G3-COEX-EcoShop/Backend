const routerx = require("express-promise-router");
const orderController = require("../controllers/orderController.js");
const authMiddleware = require("../middlewares/authMiddleware");

const router = routerx();

router.get("/list", orderController.list);
router.get("/query", orderController.query);
router.post("/add",authMiddleware.verifyPermission("order", "can_create"), orderController.add);
router.put("/update",authMiddleware.verifyPermission("order", "can_update"), orderController.update);
router.delete("/remove", authMiddleware.verifyPermission("order", "can_delete"), orderController.remove);
 
module.exports = router;