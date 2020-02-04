const express = require("express");
const router = express();
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
const path = require("path");
var multer = require("multer");
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/students/images/");
    },
    filename: (req, file, cb) => {
        const id = req.params.id;
        console.log(file);
        var filetype = "";
        if (file.mimetype === "image/jpeg") {
            filetype = "jpg";
        }
        cb(null, "student-" + id + "." + filetype);
    }
});
var upload = multer({ storage: storage });
router.post("/:id/image", upload.single("file"), function(req, res, next) {
    console.log(req.file);
    if (!req.file) {
        res.status(500);
        return next();
    }
    res.json({
        fileUrl: "https://devdeskdb.herokuapp.com/public/students/images/" +
            req.file.filename
    });
});
router.get("/:id/image", (req, res) => {
    const id = req.params.id;
    res.sendFile(
        path.join(__dirname, `../public/students/images/image-${id}.jpg`)
    );
});

module.exports = router;