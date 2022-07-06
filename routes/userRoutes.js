let Router = require('express');
let router = new Router();
let userController = require('../controllers/userController');

router.post('/user', userController.createUser);
router.get('/user', userController.getAllUsers);

module.exports = router;