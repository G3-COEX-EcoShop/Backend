require("dotenv").config();
const User = require('../models/User');

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;

passport.use(
  "auth-github",
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      scope: ["user:email"],
    },
    async function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

  passport.use(
    "auth-google",
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        scope: ['profile', 'email', 'openid', 'https://www.googleapis.com/auth/user.emails.read']

      },
      async function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );

module.exports = passport;
