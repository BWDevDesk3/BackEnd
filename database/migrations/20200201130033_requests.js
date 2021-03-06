exports.up = function(knex) {
    return knex.schema.createTable("requests", requests => {
        requests.increments();
        requests
            .integer("request_category")
            .references("id")
            .inTable("requestcategory")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        requests.date("request_date").notNullable();
        requests.string("request_title").notNullable();
        requests.string("request_details").notNullable();
        requests.string("request_stepstaken").notNullable();
        requests
            .integer("creatorId")
            .notNullable()
            .references("id")
            .inTable("students")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        requests.integer("helperId");
        requests.boolean("resolved").defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("requests");
};