const requests = require("./request-model.js");
const express = require("express");
const secrets = require("../config/secrets.js");
const { validateRequestId } = require("./request-middleware.js");
const router = express.Router();
const axios = require("axios");
const path = require("path");
var multer = require("multer");
router.post("/", (req, res) => {
    console.log(req.body);
    requests
        .insert(req.body)

    .then(request => {
        res.status(201).json(request);
    })

    .catch(err => {
        console.log(err);

        res.status(500).json({ message: "Error adding Request" });
    });
});
router.get("/", (req, res) => {
    requests
        .get()

    .then(request => {
        res.status(200).json(request);
    })

    .catch(error => {
        console.log("error on GET /api/requests/", error);

        res.status(500).json({
            errorMessage: "The request information could not be retrieved."
        });
    });
});

router.get("/:id", validateRequestId, (req, res) => {
    const id = req.params.id;

    requests
        .getById(id)

    .then(request => {
        if (request.length !== 0) {
            res.status(200).json(request);
        } else {
            res.status(404).json({
                errorMessage: "The request with the specified ID does not exist."
            });
        }
    })

    .catch(error => {
        console.log("error on GET /api/requests/:id", error);

        res.status(500).json({
            errorMessage: "The request information could not be retrieved."
        });
    });
});

router.delete("/:id", validateRequestId, (req, res) => {
    const id = req.params.id;

    requests
        .remove(id)

    .then(request => {
        if (request) {
            res.status(200).json(request);
        } else {
            res.status(404).json({
                errorMessage: "The request with the specified ID does not exist."
            });
        }
    })

    .catch(error => {
        console.log("error on DELETE /api/requests/:id", error);

        res.status(500).json({
            errorMessage: "The request could not be removed"
        });
    });
});

router.put("/:id", validateRequestId, (req, res) => {
    const id = req.params.id;

    const data = req.body;

    if (!data) {
        res.status(400).json({
            errorMessage: "Please provide updated data for the request."
        });
    } else {
        requests
            .update(id, data)

        .then(request => {
            if (request) {
                res.status(200).json(data);
            } else {
                res.status(404).json({
                    errorMessage: "The request with the specified ID does not exist."
                });
            }
        })

        .catch(error => {
            console.log("error on PUT /api/requests/:id", error);

            res.status(500).json({
                errorMessage: "The request information could not be modified."
            });
        });
    }
});

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/requests/images/");
    },
    filename: (req, file, cb) => {
        const id = req.params.id;
        var filetype = "";
        if (file.mimetype === "image/jpeg") {
            filetype = "jpg";
        }
        cb(null, "request-" + id + "." + filetype);
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
        Url: `https://devdeskdb.herokuapp.com/api/requests/${id}/image/` +
            req.file.filename
    });
});
router.get("/:id/image", (req, res) => {
    const id = req.params.id;
    res.sendFile(
        path.join(__dirname, `../public/requests/images/request-${id}.jpg`)
    );
});

router.post("/:id/email", (req, res) => {
    const requestid = req.params.id;
    const email = req.body;
    const sgMail = require("@sendgrid/mail");
    req.body.request_id = requestid;
    requests
        .insertemail(req.body)

    .then(requestemail => {
        sgMail.setApiKey(secrets.sendgridkey);
        sgMail.send(email);
        res.status(200).json({ message: "Email Sent", requestemail });
    })

    .catch(err => {
        console.log(err);

        res.status(500).json({ message: "Error adding Email to Database" });
    });
});

router.get("/:id/email", (req, res) => {
    const id = req.params.id;
    requests
        .getRequestEmail(id)

    .then(request => {
        res.status(200).json(request);
    })

    .catch(error => {
        console.log("error on GET /api/requests/email", error);
        res.status(500).json({ error, message: "an error occured" });

        res.status(500).json({
            errorMessage: "The request information could not be retrieved."
        });
    });
});

module.exports = router;