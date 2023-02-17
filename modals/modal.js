const con = require("../lib/db_connection.js")

exports.getUsers = (result) => {
    con.query("SELECT * FROM users", (err, results) => {
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    });
}

exports.getUsersById = (id, result) => {
    con.query("SELECT * FROM product WHERE product_id = ?", [id], (err, results) => {
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results[0])
        }
    });
}

exports.insertUsers = (data, result) => {
    con.query("INSERT INTO product SET ?", [data], (err, results) => {
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    });
}

exports.updateUsers = (data, id, result) => {
    con.query("UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?", [data.product_name, data.product_price, id], (err, results) => {
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    });
}

exports.deleteUsers = (id, result) => {
    con.query("DELETE FROM product WHERE product_id = ?", [id], (err, results) => {
        if(err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })
}