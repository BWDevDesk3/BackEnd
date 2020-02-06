const requests = require("./request-model.js");
const express = require("express");
const secrets = require("../config/secrets.js");
const { validateRequestId } = require("./request-middleware.js");
const router = express.Router();
const path = require("path");
var multer = require("multer");
const sgMail = require("@sendgrid/mail");
router.post("/", (req, res) => {
    const builtrequest = {
        request_category: req.body.request_category,
        request_date: req.body.request_date,
        request_title: req.body.request_title,
        request_details: req.body.request_details,
        request_stepstaken: req.body.request_stepstaken,
        creatorId: req.body.creatorId,
        helperId: req.body.helperId,
        resolved: req.body.resolved
    };

    const emailmsg = {
        to: "test@test.com",
        subject: "Dev Desk Help Request Ticket Submitted!",
        text: "Thank You for Submitting your request for assistance! \r\n A helper will be in contact with you shortly. Included below is the contents of your Dev Desk Queue ticket: \r\n" +
            "\r\n Title: \r\n" +
            req.body.request_title +
            "\r\n Date:  \r\n" +
            req.body.request_date +
            "\r\n Deatils: \r\n" +
            req.body.request_details +
            "\r\n Helper Assigned \r\n" +
            req.body.helperId +
            "\r\n Status: \r\n" +
            req.body.resolved,
        from: "no-reply@sender.com"
    };
    requests
        .findById(req.body.creatorId)
        .then(student => {
            emailmsg.to = student.email ? student.email : "test@test.com";
            requests
                .insert(builtrequest)
                .then(request => {
                    sgMail.setApiKey(secrets.sendgridkey);
                    sgMail.send(emailmsg);
                    res.status(201).json(request);
                })

            .catch(err => {
                console.log(err);

                res.status(500).json({ message: "Error adding Request" });
            });
        })
        .catch(err => res.status(500).json({ message: "Error fetching student" }));
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
    const emailmsg = {
        to: "test@test.com",
        subject: "Your Dev Desk Queue Help Request Ticket Has Been Deleted",
        text: "Thank You for Submitting your request for assistance.\r\n Your ticket has been deleted from Dev Desk Queue, and will no longer be available for helpers to assign and resolve. We hope you found a solution to your issue. If you experiance this, or any issue in the future, Please feel free to submit another Dev Desk Queue Request Ticket.\r\n",
        from: "no-reply@sender.com"
    };
    requests.getById(id).then(request => {
        requests
            .findById(request.creatorId)
            .then(student => {
                emailmsg.to = student.email ? student.email : "test@test.com";
                requests
                    .remove(id)
                    .then(request => {
                        sgMail.setApiKey(secrets.sendgridkey);
                        sgMail.send(emailmsg);
                        res.status(201).json(request);
                    })

                .catch(err => {
                    console.log(err);

                    res.status(500).json({ message: "Error deleteing Request" });
                });
            })
            .catch(err =>
                res.status(500).json({ message: "Error fetching student" })
            );
    });
});

router.put("/:id", validateRequestId, (req, res) => {
    const id = req.params.id;
    const builtrequest = {
        request_category: req.body.request_category,
        request_date: req.body.request_date,
        request_title: req.body.request_title,
        request_details: req.body.request_details,
        request_stepstaken: req.body.request_stepstaken,
        creatorId: req.body.creatorId,
        helperId: req.body.helperId,
        resolved: req.body.resolved
    };
    const emailmsg = {
        to: "test@test.com",
        subject: "Your Dev Desk Queue Help Request Ticket Has Been Updated!",
        text: "Thank You for Submitting your request for assistance.\r\n An update has been made to your Dev Desk Queue request ticket. Please see the updated details of your request below:\r\n" +
            "\r\n Title: \r\n" +
            req.body.request_title +
            "\r\n Date:  \r\n" +
            req.body.request_date +
            "\r\n Deatils: \r\n" +
            req.body.request_details +
            "\r\n Helper Assigned \r\n" +
            req.body.helperId +
            "\r\n Status: \r\n" +
            req.body.resolved,
        from: "no-reply@sender.com"
    };
    requests
        .findById(req.body.creatorId)
        .then(student => {
            emailmsg.to = student.email ? student.email : "test@test.com";
            requests
                .update(id, builtrequest)
                .then(request => {
                    sgMail.setApiKey(secrets.sendgridkey);
                    sgMail.send(emailmsg);
                    res.status(201).json(request);
                })

            .catch(err => {
                console.log(err);

                res.status(500).json({ message: "Error adding Request" });
            });
        })
        .catch(err => res.status(500).json({ message: "Error fetching student" }));
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