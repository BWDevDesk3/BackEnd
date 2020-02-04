const Helpers = require("./helpers-model.js");

function validateHelperId(req, res, next) {
    const id = req.params.id;

    Helpers.findById(id)

    .then(helper => {
        if (!helper) {
            res.status(400).json({ message: "Invalid helper id." });
        } else {
            req.helper = helper;

            next();
        }
    })

    .catch(err => {
        console.log(err);

        res.status(500).json({ message: "Error retrieving helper id." });
    });
}

module.exports = {
    validateHelperId
};