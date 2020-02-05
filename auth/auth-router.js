const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Students = require("../students/students-model.js");
const Helpers = require("../helpers/helpers-model.js");
const secrets = require("../config/secrets.js");

router.post("/students/register", (req, res) => {
    let student = req.body;
    const hash = bcrypt.hashSync(student.password, 10); // 2 ^ n
    student.password = hash;
    if (!Students.findBy(student.username)) {
        Students.add(student)
            .then(saved => {
                res.status(201).json(saved);
            })
            .catch(error => {
                res
                    .status(401)
                    .json(error, { error: "An unexpected error has occured" });
            });
    } else {
        res
            .status(401)
            .json({ message: "A Student with that username already exsists" });
    }
});

router.post("/students/login", (req, res) => {
    let { username, password } = req.body;

    Students.findBy({ username })
        .first()
        .then(student => {
            if (student && bcrypt.compareSync(password, student.password)) {
                const token = generateToken(student);
                res.status(200).json({
                    message: `Welcome ${student.username}!`,
                    username: student.username,
                    studentid: student.id,
                    token
                });
            } else {
                res.status(401).json({ message: "Authentication Failed" });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post("/helpers/register", (req, res) => {
    let helper = req.body;

    const hash = bcrypt.hashSync(helper.password, 10);

    helper.password = hash;
    if (!Helpers.findBy(helper.username)) {
        Helpers.add(helper)
            .then(saved => {
                res.status(201).json(saved);
            })
            .catch(error => {
                res
                    .status(401)
                    .json(error, { error: "an unexpected error has occured" });
            });
    } else {
        res
            .status(401)
            .json({ message: "A Helper with that username already exsists" });
    }
});

router.post("/helpers/login", (req, res) => {
    let { username, password } = req.body;

    Helpers.findBy({ username })

    .first()

    .then(helper => {
        if (helper && bcrypt.compareSync(password, helper.password)) {
            const token = generateToken(helper);

            res.status(200).json({
                message: `Welcome ${helper.username}!`,
                username: helper.username,
                helperid: helper.id,
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

function generateToken(student) {
    const payload = {
        subject: student.id,
        username: student.username,
        studentid: student.id
    };

    const options = {
        expiresIn: "1d"
    };

    return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;