const db = require("../data/dbConfig.js");

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

async function add(student) {
    const [id] = await db("helpers").insert(student);

    return findById(id);
}

function findById(id) {
    return db("helpers")
        .where({ id })
        .first();
}
