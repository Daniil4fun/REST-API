const User = require('../models/models').User;

class UserController {
    async createUser(req, res) {
        let {name, surname} = req.body;
        let newUser = await User.create({
            name,
            surname
        });
        res.json(newUser);
    }
    async getAllUsers(req, res) {
        let users = await User.findAll({
            row: true
        });
        res.json(users);
    }
}

module.exports = new UserController();