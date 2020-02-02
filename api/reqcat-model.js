const db = require("../database/dbConfig.js");

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
};

function get() {
    return db("requestcatagory");
}

function getById(id) {
    return db("requestcatagory")
        .where({ id })
        .first();
}

function insert(request) {
    return db("requestcatagory")
        .insert(request)
        .then(ids => {
            return getById(ids[0]);
        });
}

function update(id, changes) {
    return db("requestcatagory")
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db("requestcatagory")
        .where("id", id)
        .del();
}