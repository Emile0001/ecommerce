function getSignUp(req, res) {
    res.render("customer/auth/signup");
}

// handles the action when a user is created
function signup(req, res) {}

function getLogin(req, res) {
    // ....
}
module.exports = {
    getSignUp: getSignUp,
    getLogin: getLogin,
    signup: signup,
};
