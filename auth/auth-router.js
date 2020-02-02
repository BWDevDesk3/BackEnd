const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Helpers = require("../helpers/helpers-model.js");
const secret = require("../config/secret.js");

router.post("/register", (req, res) => {
    let helper = req.body;
    const hash = bcrypt.hashSync(helper.password, 10);
    helper.password = hash;

    Helpers.add(helper)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post("/login", (req, res) => {
    let { username, password } = req.body;

    Helpers.findBy({ username })
        .first()
        .then(helper => {
            if (helper && bcrypt.compareSync(password, helper.password)) {
                const token = generateToken(helper);
                res.status(200).json({
                    message: `Welcome ${helper.username}!`,
                    token
                });
            } else {
                res.status(401).json({ message: "Failed to Authenticate." });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

function generateToken(helper) {
    const payload = {
        subject: helper.id,
        username: helper.username
    };

    const options = {
        expiresIn: "1d"
    };

    return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = router;