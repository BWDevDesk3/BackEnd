const db = require("../database/dbConfig.js");

module.exports = {
    add,

    find,

    findBy,

    findById,
    getHelperRequests,
    update
};

function find() {
    return db("helpers").select("id", "username", "email");
}

function findBy(filter) {
    return db("helpers").where(filter);
}

async function add(helper) {
    const [id] = await db("helpers").insert(helper);

    return findById(id);
}

function findById(id) {
    return db("helpers")
        .where({ id })
        .first();
}

function update(id, changes) {
    return db("helpers")
        .where({ id })
        .update(changes);
}

function getHelperRequests(id) {
    return db("requests as r")
        .join("helpers as h", "h.id", "r.helperid")
        .select(
            "r.id",
            "r.request_category",
            "r.request_date",
            "r.request_title",
            "r.request_details",
            "r.request_stepstaken",
            "r.creatorid",
            "h.id as helperid",
            "r.resolved"
        )
        .where("r.helperId", id)
        .orderBy("r.id", "asc");
}