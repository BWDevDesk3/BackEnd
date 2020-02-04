exports.up = function(knex) {
    return knex.schema.createTable("students", students => {
        students.increments();
        students
            .string("username", 255)
            .notNullable()
            .unique();
        students.string("password", 255).notNullable();
        students.string("file");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("students");
};