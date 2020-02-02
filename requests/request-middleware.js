const requests = require("./requests-model.js");

function validateRequestId(req, res, next) {
    const id = req.params.id;

    requests
        .getById(id)

    .then(post => {
        if (!post) {
            res.status(400).json({ message: "Invalid Request id." });
        } else {
            req.post = post;

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