exports.up = function(knex) {
    return knex.schema.createTable("helpers", helpers => {
        helpers.increments();

        helpers

            .string("username", 255)

        .notNullable()

        .unique();

        helpers.string("password", 255).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("helpers");
};