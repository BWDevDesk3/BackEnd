const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Students = require("../students/students-model.js");
const secrets = require("../config/secrets.js");

router.post("/register", (req, res) => {
    let student = req.body;
    const hash = bcrypt.hashSync(student.password, 10); // 2 ^ n
    student.password = hash;

    Students.add(student)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post("/login", (req, res) => {
    let { username, password } = req.body;

    Students.findBy({ username })
        .first()
        .then(student => {
            if (student && bcrypt.compareSync(password, student.password)) {
                const token = generateToken(student);
                res.status(200).json({
                    message: `Welcome ${student.username}!`,
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