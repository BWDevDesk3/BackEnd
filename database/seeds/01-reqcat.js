exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("requestcategory")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("requestcategory").insert([
                { id: 1, category: "Javascript" },
                { id: 2, category: "CSS" },
                { id: 3, category: "NODE" },
                { id: 4, category: "React" },
                { id: 5, category: "REDUX" },
                { id: 6, category: "JSON" },
                { id: 7, category: "Python" },
                { id: 8, category: "GIT" },
                { id: 9, category: "Postman" },
                { id: 10, category: "Yarn" },
                { id: 11, category: "Library Installation" },
                { id: 12, category: "App Deployment" }
            ]);
        });
};