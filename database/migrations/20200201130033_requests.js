exports.up = function(knex) {
    return knex.schema.createTable("requests", students => {
        students.increments();
        students.string("request_subject", 255).notNullable();
        students.string("request_date").notNullable();
        students.string("request_details").notNullable();
        students.integer("creatorId").notNullable();
        students.string("helperId");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("students");
};