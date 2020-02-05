const express = require("express");
const router = express();
const { validateHelperId } = require("./helpers-middleware");
const Helpers = require("./helpers-model.js");
const path = require("path");
var multer = require("multer");
router.get("/", (req, res) => {
    Helpers.find()

    .then(helpers => {
        res.json(helpers);
    })

    .catch(err => res.send(err));
});
router.get("/:id/requests", validateHelperId, (req, res) => {
    Helpers.getHelperRequests(req.helper.id)

    .then(requests => {
        res.status(200).json(requests);
    })

    .catch(err => {
        console.log(err);

        res.status(500).json({
            message: "Error retrieving helper requests"
        });
    });
});
router.get("/:id/", validateHelperId, (req, res) => {
    const id = req.params.id;

    Helper.findById(id)

    .then(helper => {
        res
            .status(200)
            .json({
                helperid: helper.id,
                username: helper.username,
                email: helper.email
            });
    })

    .catch(err => {
        console.log(err);

        res.status(500).json({
            message: "Error retrieving Helper"
        });
    });
});

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/helpers/images/");
    },
    filename: (req, file, cb) => {
        const id = req.params.id;
        var filetype = "";
        if (file.mimetype === "image/jpeg") {
            filetype = "jpg";
        }
        cb(null, "helper-" + id + "." + filetype);
    }
});
var upload = multer({ storage: storage });
router.post("/:id/image", upload.single("file"), function(req, res, next) {
    const id = req.params.id;
    if (!req.file) {
        res.status(500);
        return next();
    }
    res.json({
        Url: `https://devdeskdb.herokuapp.com/api/helpers/${id}/image/` +
            req.file.filename
    });
});
router.get("/:id/image", (req, res) => {
    const id = req.params.id;
    res.sendFile(
        path.join(__dirname, `../public/helpers/images/helper-${id}.jpg`)
    );
});

module.exports = router;