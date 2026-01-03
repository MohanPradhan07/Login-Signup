const jwt = require("jsonwebtoken");

const ensureAuthenticated = (req, res, next) => {
  const authHeader = req.headers.authorization; // get header
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized, token missing" });
  }

  // Split "Bearer <token>"
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized, token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Unauthorized, token invalid or expired" });
  }
};

module.exports = ensureAuthenticated;
