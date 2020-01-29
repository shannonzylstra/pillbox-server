const db = require('../models');
const router = require('express').Router();

// GET / - read all users
router.get('/', (req, res) => {
    db.users.find()
    .then(users => {
        res.send(users);
    })
    .catch(err => {
        res.status(500).send({ message: `error getting users`})
    })
});
// GET /:id - read one user
router.get('/:id', (req, res) => {
    db.users.findById(req.params.id)
    .then(user => {
        res.send(user);
    })
    .catch(err => {
        res.status(500).send({ message: `user not found`})
    })
});

module.exports = router;