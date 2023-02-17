const express = require("express")
const router = express.Router()
const control = require("../controller/controller")

router.get('/users', control.showUser);

router.get('/users/:id', control.showUserById);

router.post('/users', control.createUser);

router.put('/users/:id', control.updateUser);

router.delete('/users/:id', control.deleteUser);

module.exports = router;