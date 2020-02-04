const router = require("express").Router();

const Helpers = require("./helpers-model.js");

router.get("/", (req, res) => {
    Helpers.find()

    .then(helpers => {
        res.json(helpers);
    })

    .catch(err => res.send(err));
});

module.exports = router;