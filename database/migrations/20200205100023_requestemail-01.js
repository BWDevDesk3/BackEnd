exports.up = function(knex) {
    return knex.schema.createTable("request_email", requestsemail => {
        requestsemail.increments();
        requestsemail
            .integer("request_id")
            .references("id")
            .inTable("requests")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        requestsemail.string("to").notNullable();
        requestsemail.string("from").notNullable();
        requestsemail.string("subject").notNullable();
        requestsemail.string("text");
        requestsemail.string("html");
    });
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("request_email");
};