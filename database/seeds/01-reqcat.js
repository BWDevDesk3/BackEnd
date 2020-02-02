exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("requestcatagory")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("requestcatagory").insert([
                { id: 1, catagory: "Javascript" },
                { id: 2, catagory: "CSS" },
                { id: 3, catagory: "NODE" },
                { id: 4, catagory: "React" },
                { id: 5, catagory: "REDUX" },
                { id: 6, catagory: "JSON" },
                { id: 7, catagory: "Python" },
                { id: 8, catagory: "GIT" },
                { id: 9, catagory: "Postman" },
                { id: 10, catagory: "Yarn" },
                { id: 11, catagory: "Library Installation" },
                { id: 12, catagory: "App Deployment" }
            ]);
        });
};