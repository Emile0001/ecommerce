const User = require("../models/user.model");

function getSignUp(req, res) {
    res.render("customer/auth/signup");
}

async function signup(req, res) {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        fullname: req.body.fullname,
        street: req.body.street,
        postal: req.body.postal,
        city: req.body.city,
    });

    await user.signup();
    res.redirect("/login");
}

function getLogin(req, res) {
    res.render("customer/auth/login");
}
module.exports = {
    getSignUp: getSignUp,
    getLogin: getLogin,
    signup: signup,
};
