const requests = require("./request-model.js");
const express = require("express");
const { validateRequestId } = require("./request-middleware.js");
const router = express.Router();

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

module.exports = router;