const routerx = require("express-promise-router");
const passport = require("passport");
const authController = require("../controllers/authController");

const router = routerx();

router.post("/login", authController.login);

router.post("/register", authController.register);

router.get("/userInfo", authController.userInfo);

router.get("/github", passport.authenticate("auth-github", { session: false }));
router.get(
  "/github/callback",
  passport.authenticate("auth-github", { session: false }),
  authController.github
);

router.get("/google", passport.authenticate("auth-google", { session: false }));
router.get(
  "/google/callback",
  passport.authenticate("auth-google", { session: false }),
  authController.google
);
module.exports = router;
