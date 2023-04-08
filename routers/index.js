const routerx = require("express-promise-router");
const category = require("./category");
const auth = require("./auth");
const product = require("./product");
const router = routerx();

//router.use("/category", category);
router.use("/product", product);
router.use("/auth", auth);

module.exports = router;
