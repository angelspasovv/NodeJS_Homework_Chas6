function welcome(req, res) {
    res.send("Welcome to my page!");
}

function handleUser(req, res) {
    const username = req.query.username;
    const usernamePattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])[A-Za-z\d]{3,}/;
    if (usernamePattern.test(username)) {
        res.send(`Hello, ${username}! Nice to meet you.`);
    } else {
        res.send("This is not a valid username format! Your username must contain atleast one uppercase, one lowercase and one digit.");
    }
}

function handleNotFound(req, res) {
    res.status(404).send("Error 404! Not found!");
};

module.exports = {
    welcome,
    handleUser,
    handleNotFound,
}
