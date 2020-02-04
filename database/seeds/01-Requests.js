exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("requests")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("requests").insert([{
                    id: 1,
                    request_category: "1",
                    request_date: "01/01/2020",
                    request_title: "Request 1",
                    request_details: "Forget Houston, I have Problems!",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "1",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 2,
                    request_category: "1",
                    request_date: "01/02/2020",
                    request_title: "Request 2",
                    request_details: "Help Me Now",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "2",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 3,
                    request_category: "1",
                    request_date: "01/03/2020",
                    request_title: "Request 3",
                    request_details: "Stuck For Hours",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "3",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 4,
                    request_category: "1",
                    request_date: "01/04/2020",
                    request_title: "Request 4",
                    request_details: "I dont even think YOU could make it work!",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "4",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 5,
                    request_category: "1",
                    request_date: "01/05/2020",
                    request_title: "Request 5",
                    request_details: "I'm pretty sure I found a bug bill gates missed!",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "5",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 6,
                    request_category: "2",
                    request_date: "01/06/2020",
                    request_title: "Help Request",
                    request_details: "Help Help Help!",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "6",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 7,
                    request_category: "2",
                    request_date: "01/07/2020",
                    request_title: "I've fallen and I cant get up",
                    request_details: "Can we just Talk for a while?",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "7",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 8,
                    request_category: "2",
                    request_date: "01/08/2020",
                    request_title: "If I told you, you wouldnt belive me",
                    request_details: "You + Fixing this = $$",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "8",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 9,
                    request_category: "2",
                    request_date: "01/09/2020",
                    request_title: "Javescript, Lack of Java something",
                    request_details: "My dog ate my probelms",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "9",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 10,
                    request_category: "2",
                    request_date: "01/10/2020",
                    request_title: "Wow, this might have been a bad Idea",
                    request_details: "Install this, Dependencies that, Can I just code now?",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "10",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 11,
                    request_category: "3",
                    request_date: "01/11/2020",
                    request_title: "Do they all have to be different?",
                    request_details: "My problem has now become your problem",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "1",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 12,
                    request_category: "3",
                    request_date: "01/12/2020",
                    request_title: "We're all different",
                    request_details: "Why does this always happen to me?",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "2",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 13,
                    request_category: "3",
                    request_date: "01/13/2020",
                    request_title: "Problem Title?",
                    request_details: "Ok, I'm getting 2+2=5. how is this happening?",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "3",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 14,
                    request_category: "3",
                    request_date: "01/14/2020",
                    request_title: "Tell me the solution first",
                    request_details: "I'm about to make this interface with my foot!",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "4",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 15,
                    request_category: "3",
                    request_date: "01/15/2020",
                    request_title: "99 Problems",
                    request_details: "I wrote this 3ms ago, Can I get some help already?!",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "5",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 16,
                    request_category: "4",
                    request_date: "01/16/2020",
                    request_title: "Your Problem",
                    request_details: "My problem is a lack of a Solution",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "6",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 17,
                    request_category: "4",
                    request_date: "01/17/2020",
                    request_title: "Umm...I found it like this?",
                    request_details: "Can I bring you a solution, and you give me a problem?",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "7",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 18,
                    request_category: "4",
                    request_date: "01/18/2020",
                    request_title: "Computer stuff, why are you asking so many questions?",
                    request_details: "I ran out of problems, so now I'm just making them up",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "8",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 19,
                    request_category: "4",
                    request_date: "01/19/2020",
                    request_title: "Question 1",
                    request_details: "Could my code do bad to hummanity?",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "9",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 20,
                    request_category: "4",
                    request_date: "01/20/2020",
                    request_title: "Question 2",
                    request_details: "My code is trying to kill me!",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "10",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 21,
                    request_category: "5",
                    request_date: "01/21/2020",
                    request_title: "Question 3",
                    request_details: "My code is just doing the same thing over and over again",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "1",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 22,
                    request_category: "5",
                    request_date: "01/22/2020",
                    request_title: "Question 4",
                    request_details: "I'm not even sure where to start",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "2",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 23,
                    request_category: "5",
                    request_date: "01/23/2020",
                    request_title: "Question 5",
                    request_details: "Hackers infiltrated my code and are controlling my mind",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "3",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 24,
                    request_category: "5",
                    request_date: "01/24/2020",
                    request_title: "If your reading this, then I have a problem",
                    request_details: "Alexa - Order a cup of coffe for delivery. Alexaaaa....helloooo",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "4",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 25,
                    request_category: "5",
                    request_date: "01/25/2020",
                    request_title: "Isnt it your job to do this?",
                    request_details: "It's 2AM, do you know where your code is?",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "5",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 26,
                    request_category: "6",
                    request_date: "01/26/2020",
                    request_title: "Umm...like, isnt there an Ipone app for this?",
                    request_details: "Simple Problem",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "6",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 27,
                    request_category: "6",
                    request_date: "01/27/2020",
                    request_title: "Your going to need some coffee",
                    request_details: "Complex Problem",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "7",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 28,
                    request_category: "6",
                    request_date: "01/28/2020",
                    request_title: "I need it fixed!",
                    request_details: "My Problem",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "8",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 29,
                    request_category: "6",
                    request_date: "01/01/2020",
                    request_title: "It's always",
                    request_details: "Your Problem",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "9",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 30,
                    request_category: "7",
                    request_date: "01/02/2020",
                    request_title: "The First One!",
                    request_details: "Everyons Problem",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "10",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 31,
                    request_category: "7",
                    request_date: "01/03/2020",
                    request_title: "The Second One!",
                    request_details: "My problem is your fault",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "1",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 32,
                    request_category: "7",
                    request_date: "01/04/2020",
                    request_title: "The Third One!",
                    request_details: "I like to make problems",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "2",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 33,
                    request_category: "7",
                    request_date: "01/05/2020",
                    request_title: "The Fourth One!",
                    request_details: "I like to fix problems",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "3",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 34,
                    request_category: "7",
                    request_date: "01/06/2020",
                    request_title: "The Fifth One!",
                    request_details: "If I had a problem for every time...",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "4",
                    helperId: "",
                    resolved: "0"
                },
                {
                    id: 35,
                    request_category: "8",
                    request_date: "01/07/2020",
                    request_title: "The Sixth One!",
                    request_details: "I need Solutions, and I need them now!",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "5",
                    helperId: "10",
                    resolved: "0"
                },
                {
                    id: 36,
                    request_category: "8",
                    request_date: "01/08/2020",
                    request_title: "The Seventh One!",
                    request_details: "Hey, It's me again, I was hanging up, and I thought I heard you....no? ok, well yeah, It's me, call me",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "6",
                    helperId: "9",
                    resolved: "0"
                },
                {
                    id: 37,
                    request_category: "8",
                    request_date: "01/09/2020",
                    request_title: "The Eighth One!",
                    request_details: "I've been told the problem exsists between the keybord and the chair, but i dont see anything there",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "7",
                    helperId: "8",
                    resolved: "0"
                },
                {
                    id: 38,
                    request_category: "8",
                    request_date: "01/10/2020",
                    request_title: "The Nineth One!",
                    request_details: "Ok, All I have to do is make 5 more of these",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "8",
                    helperId: "7",
                    resolved: "0"
                },
                {
                    id: 39,
                    request_category: "8",
                    request_date: "01/11/2020",
                    request_title: "The Tenth One!",
                    request_details: "Ok, All I have to do is make 4 more of these",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "9",
                    helperId: "6",
                    resolved: "0"
                },
                {
                    id: 40,
                    request_category: "9",
                    request_date: "01/12/2020",
                    request_title: "The Only One!",
                    request_details: "Ok, All I have to do is make 3 more of these",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "10",
                    helperId: "5",
                    resolved: "0"
                },
                {
                    id: 41,
                    request_category: "9",
                    request_date: "01/13/2020",
                    request_title: "The Unique One!",
                    request_details: "Ok, All I have to do is make 2 more of these",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "1",
                    helperId: "4",
                    resolved: "0"
                },
                {
                    id: 42,
                    request_category: "9",
                    request_date: "01/14/2020",
                    request_title: "The Hard One!",
                    request_details: "Ok, All I have to do is make 1 more of these",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "2",
                    helperId: "3",
                    resolved: "0"
                },
                {
                    id: 43,
                    request_category: "9",
                    request_date: "01/15/2020",
                    request_title: "The Easy One!",
                    request_details: "Ok, All I have to do is make this last one",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "3",
                    helperId: "2",
                    resolved: "0"
                },
                {
                    id: 44,
                    request_category: "9",
                    request_date: "01/16/2020",
                    request_title: "The Boring One!",
                    request_details: "I have Problems, But i dont think their the same as everyone else's problems",
                    request_stepstaken: "As few as possible while still achieving the same goal.",
                    creatorId: "4",
                    helperId: "1",
                    resolved: "0"
                }
            ]);
        });
};