const routerx = require("express-promise-router");
const passport = require("passport");
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = routerx();
//Ejmeplo como proteger rutas
// router.post(
//   "/name",
//   authMiddleware.verifyPermission("category", "create"),
//   authController.login
// );

router.post("/login", authController.login);
router.post("/register", authController.register);

router.get(
  "/github",
  passport.authenticate("auth-github", {
    session: false,
  })
);
router.get(
  "/github/callback",
  passport.authenticate("auth-github", {
    session: false,
  }),
  authController.github
);

module.exports = router;
