const db = require("../database/dbConfig.js");

module.exports = {
    get,
    getById,
    insert,
    update,
    remove,
    insertemail
};

function get() {
    return db("requests");
}

function getById(id) {
    return db("requests")
        .where({ id })
        .first();
}

function insert(request) {
    return db("requests")
        .insert(request)
        .then(ids => {
            return getById(ids[0]);
        });
}

function insertemail(requestemail) {
    return db("request_email")
        .insert(requestemail)
        .then(ids => {
            return getById(ids[0]);
        });
}

function update(id, changes) {
    return db("requests")
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db("requests")
        .where("id", id)
        .del();
}