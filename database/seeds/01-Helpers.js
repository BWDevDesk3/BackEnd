exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("helpers")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("helpers").insert([{
                    id: 1,
                    username: "Helper1",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 2,
                    username: "Helper2",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 3,
                    username: "Helper3",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 4,
                    username: "Helper4",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 5,
                    username: "Helpert5",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 6,
                    username: "Helper6",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 7,
                    username: "Helper7",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 8,
                    username: "Helper8",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 9,
                    username: "Helper9",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                },
                {
                    id: 10,
                    username: "Helper10",
                    password: "$2a$10$MD79LxnvNB05DNulT/Ni7.DiOfu2xTMU12kFlwUclpomoyerXJQK6",
                    email: "Test@Email.com"
                }
            ]);
        });
};