const knex = require('../db/knex')

exports.getAllUsers = function (req, res) {
    knex('users')
        .then(users => res.json(users))
}

exports.addOneUser = function (req, res) {
    knex('user')
        .insert(req.body)
        .returning('*')
        .then(newUser => res.json(newUser))
}