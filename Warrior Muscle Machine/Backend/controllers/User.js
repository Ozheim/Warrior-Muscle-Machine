const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const workoutsession = require("../models/Workoutsession");

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() =>
          res.status(201).json({
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
            message: "User created!",
          })
        )
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user === null) {
        return res
          .status(401)
          .json({ message: "Incorrect email or password." });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ message: "Incorrect email or password." });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
            message: "Login successful.",
          });
        })
        .catch((error) =>
          res.status(500).json({
            message: "Error during password verification.",
          })
        );
    })
    .catch((error) =>
      res.status(500).json({ message: "Error during user search." })
    );
};

exports.checkSessionExists = async (req, res) => {
  try {
    const userId = req.auth.userId.toString();

    const session = await workoutsession.findOne({ Userid: userId });

    if (session) {
      console.log("Session found:", session);
      return res.status(200).json({ sessionExists: true });
    } else {
      console.log("No session found for this user");
      return res.status(200).json({ sessionExists: false });
    }
  } catch (err) {
    console.log("Error while checking session:", err);
    return res.status(500).json({ error: "Server error" });
  }
};
