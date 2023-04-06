const routerx = require("express-promise-router");
const passport = require("passport");
const authController = require("../controllers/authController");

const router = routerx();

router.post("/login", authController.login);

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
