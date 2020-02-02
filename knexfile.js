const { jwtSecret } = require("./config/secrets.js");
module.exports = {
    development: {
        client: "sqlite3",

        connection: {
            filename: "./database/DevDeskDB.db"
        },

        useNullAsDefault: true,

        migrations: {
            directory: "./database/migrations"
        },

        seeds: {
            directory: "./database/seeds"
        }
    },

    staging: {
        client: "postgresql",

        connection: {
            database: "./database/DevDeskDB.db",

            user: "devDeskdb",

            password: jwtSecret
        },

        pool: {
            min: 2,

            max: 10
        },

        migrations: {
            tableName: "knex_migrations"
        }
    },

    production: {
        client: "postgresql",

        connection: {
            database: "./database/DevDeskDB.db",

            user: "devdeskdb",

            password: jwtSecret
        },

        pool: {
            min: 2,

            max: 10
        },

        migrations: {
            directory: "./database/migrations"
        }
    }
};