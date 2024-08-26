const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing!" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token missing!" });
  }

  try {
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET || "RANDOM_TOKEN_SECRET"
    );
    req.auth = { userId: decodedToken.userId };
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token!" });
  }
};
