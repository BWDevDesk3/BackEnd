const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secrets.js");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ Error: "Invalid or Expired Token" });
            } else {
                req.student = decodedToken.student;

                next();
            }
        });
    } else {
        res.status(401).json({ you: "Authentication Failed!" });
    }
};