exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("students")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("students").insert([{
                    id: 1,
                    username: "Student1",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6"
                },
                {
                    id: 2,
                    username: "Student2",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6"
                },
                {
                    id: 3,
                    username: "Student3",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6"
                },
                {
                    id: 4,
                    username: "Student4",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6"
                },
                {
                    id: 5,
                    username: "Student5",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6"
                },
                {
                    id: 6,
                    username: "Student6",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6"
                },
                {
                    id: 7,
                    username: "Student7",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6"
                },
                {
                    id: 8,
                    username: "Student8",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6"
                },
                {
                    id: 9,
                    username: "Student9",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6"
                },
                {
                    id: 10,
                    username: "Student10",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6"
                }
            ]);
        });
};