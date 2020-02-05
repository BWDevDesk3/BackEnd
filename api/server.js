const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
const studentsRouter = require("../students/students-router.js");
const requestsRouter = require("../requests/request-router.js");
const helpersRouter = require("../helpers/helpers-router.js");
const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/auth/", authRouter);
server.use("/api/helpers", authenticate, helpersRouter);
server.use("/api/auth/", authRouter);
server.use("/api/students", authenticate, studentsRouter);
server.use("/api/requests", authenticate, requestsRouter);
const lookup = require("./reqcat-model.js");

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

server.get("/api/lookup", (req, res) => {
    lookup
        .get()

    .then(lookupcat => {
        res.status(200).json(lookupcat);
    })

    .catch(error => {
        res.status(500).json({
            Message: "The lookup information could not be retrieved."
        });
    });
});
module.exports = server;