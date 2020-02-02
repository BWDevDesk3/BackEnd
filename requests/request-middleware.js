const Requests = require("./request-model.js");

function validateRequestId(req, res, next) {
    const id = req.params.id;

    Requests.getById(id)

    .then(request => {
        if (!request) {
            res.status(400).json({ message: "Invalid Request id." });
        } else {
            req.request = request;

            next();
        }
    })

    .catch(err => {
        console.log(err);

        res.status(500).json({ message: "Error retrieving Request id." });
    });
}
module.exports = {
    validateRequestId
};