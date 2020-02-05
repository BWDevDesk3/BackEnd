exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("students")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("students").insert([{
                    id: 1,
                    username: "Student1",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 2,
                    username: "Student2",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 3,
                    username: "Student3",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 4,
                    username: "Student4",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 5,
                    username: "Student5",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 6,
                    username: "Student6",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 7,
                    username: "Student7",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 8,
                    username: "Student8",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 9,
                    username: "Student9",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 10,
                    username: "Student10",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                }
            ]);
        });
};