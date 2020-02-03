exports.up = function(knex) {
    return knex.schema.createTable("requestcategory", catagory => {
        catagory.increments();
        catagory.string("category", 255).notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("requestcategory");
};