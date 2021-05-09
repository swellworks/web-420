// Verify token on GET
exports.user_token = function(req, res) {
    User.getById(req.userId, function(err, user) {
        if (err) return res.status(500).send('There was a problem finding the user.');

        if (!user) return res.status(404).send('No user found.');

        res.status(200).send(user);
    });
};