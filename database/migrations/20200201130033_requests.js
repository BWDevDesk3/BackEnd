exports.up = function(knex) {
    return knex.schema.createTable("requests", requests => {
        requests.increments();
        requests
            .integer("request_catagory")
            .notNullable()
            .references("id")
            .inTable("requestcatagory")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        requests.string("request_date").notNullable();
        requests.string("request_details").notNullable();
        requests
            .integer("creatorId")
            .notNullable()
            .references("id")
            .inTable("students")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        requests.integer("helperId");
        requests
            .boolean("resolved")
            .notNullable()
            .defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("requests");
};