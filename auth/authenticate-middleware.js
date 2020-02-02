const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secret.js");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ Error: "Token is expired or invalid!" });
            } else {
                req.helper = decodedToken.helper;

                next();
            }
        });
    } else {
        res.status(401).json({ message: "Failed to Authenticate!" });
    }
};
