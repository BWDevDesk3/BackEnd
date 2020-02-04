const db = require("../database/dbConfig.js");

module.exports = {
    add,

    find,

    findBy,

    findById
};

function find() {
    return db("helpers").select("id", "username");
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