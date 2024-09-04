const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "No token provided!" });
    }

    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");

    req.auth = { userId: decodedToken.userId };
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token!" });
  }
};
