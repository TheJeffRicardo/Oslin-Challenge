const modal = require("../modals/modal")


exports.showUser = (req, res) => {
    modal.getUsers((err, results) => {
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    });
}

exports.showUserById = (req, res) => {
    modal.getUsersById(req.params.id, (err, results) => {
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    });
}

exports.createUser = (req, res) => {
    const data = req.body
    modal.insertUsers(data, (err, results) => {
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    });
}

exports.updateUser = (req, res) => {
    const data  = req.body;
    const id    = req.params.id
    modal.updateUsers(data, id, (err, results) => {
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

exports.deleteUser = (req, res) => {
    const id = req.params.id
    modal.deleteProductById(id, (err, results) => {
        if (err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}