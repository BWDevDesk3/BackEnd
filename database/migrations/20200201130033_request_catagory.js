exports.up = function(knex) {
    return knex.schema.createTable("requestcatagory", catagory => {
        catagory.increments();
        catagory.string("catagory", 255).notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("requestcatagory");
};