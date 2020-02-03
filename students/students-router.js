const router = require("express").Router();
const { validateStudentId } = require("./students-middleware");
const Students = require("./students-model.js");

router.get("/", (req, res) => {
    Students.find()
        .then(students => {
            res.json(students);
        })
        .catch(err => res.send(err));
});

router.get("/:id/requests", validateStudentId, (req, res) => {
    Students.getStudentRequests(req.student.id)

    .then(requests => {
        res.status(200).json(requests);
    })

    .catch(err => {
        console.log(err);

        res.status(500).json({
            message: "Error retrieving posts."
        });
    });
});
router.get("/:id/", validateStudentId, (req, res) => {
    const id = req.params.id;

    Students.findById(id)

    .then(student => {
        res
            .status(200)
            .json({ studentid: student.id, username: student.username });
    })

    .catch(err => {
        console.log(err);

        res.status(500).json({
            message: "Error retrieving Student."
        });
    });
});

module.exports = router;