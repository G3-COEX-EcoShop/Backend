const routerx = require("express-promise-router");
const orderController = require("../controllers/orderController.js");
const authMiddleware = require("../middlewares/authMiddleware");

const router = routerx();

router.get("/list", orderController.list);
router.get("/query", orderController.query);
router.post("/add",orderController.add);
router.put("/update",authMiddleware.verifyPermission("order", "update"), orderController.update);
router.delete("/remove", authMiddleware.verifyPermission("order", "delete"), orderController.remove);
 
module.exports = router;