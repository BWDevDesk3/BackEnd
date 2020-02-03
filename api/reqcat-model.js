const db = require("../database/dbConfig.js");

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
};

function get() {
    return db("requestcategory");
}

function getById(id) {
    return db("requestcategory")
        .where({ id })
        .first();
}

function insert(request) {
    return db("requestcategory")
        .insert(request)
        .then(ids => {
            return getById(ids[0]);
        });
}

function update(id, changes) {
    return db("requestcategory")
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db("requestcategory")
        .where("id", id)
        .del();
}