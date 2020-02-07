const sgMail = require("@sendgrid/mail");
const secrets = require("../config/secrets.js");

function studentRegEmail(req, res, next) {
    const email = {
        to: req.body.email,
        subject: "Student Registration Complete!",
        text: "Thank You for Registering, your new Student username is: " +
            req.body.username,
        from: "Registration@DevDeskQueue.com"
    };
    sgMail.setApiKey(secrets.sendgridkey);
    sgMail.send(email);
    next();
}

function helperRegEmail(req, res, next) {
    const email = {
        to: req.body.email,
        subject: "Helper Registration Complete!",
        text: "Thank You for Registering, your new Helper username is: " +
            req.body.username,
        from: "Registration@DevDeskQueue.com"
    };
    sgMail.setApiKey(secrets.sendgridkey);
    sgMail.send(email);
    next();
}
module.exports = {
    studentRegEmail,
    helperRegEmail
};