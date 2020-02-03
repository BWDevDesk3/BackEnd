exports.up = function(knex) {
    return knex.schema.createTable("requestcategory", category => {
        category.increments();
        category.string("category", 255).notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("requestcategory");
};