const db = require("../database/dbConfig.js");

module.exports = {
    add,
    find,
    findBy,
    findById,
    getStudentRequests
};

function find() {
    return db("students").select("id", "username");
}

function findBy(filter) {
    return db("students").where(filter);
}

async function add(student) {
    const [id] = await db("students").insert(student);

    return findById(id);
}

function findById(id) {
    return db("students")
        .where({ id })
        .first();
}

function getStudentRequests(id) {
    return db("requests as r")
        .join("students as s", "s.id", "r.creatorId")
        .select(
            "r.id",
            "r.request_category",
            "r.request_details",
            "s.id as RequestCreator"
        )
        .where("r.creatorId", id);
}