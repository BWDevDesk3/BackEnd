const Students = require("./students-model.js");

function validateStudentId(req, res, next) {
    const id = req.params.id;

    Students.findById(id)

    .then(student => {
        if (!student) {
            res.status(400).json({ message: "Invalid student id." });
        } else {
            req.student = student;

            next();
        }
    })

    .catch(err => {
        console.log(err);

        res.status(500).json({ message: "Error retrieving student id." });
    });
}

module.exports = {
    validateStudentId
};