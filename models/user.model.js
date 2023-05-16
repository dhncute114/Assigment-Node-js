const { Schema, model } = require("mongoose");
var db = require('./db');

var nhanvienschema = new db.mongoose.Schema(
    {
        username: {type: String, required: true},
        pass: {type: String, required: true},
        email: {type: String, required: true},
        sdt: {type: String, required: true},
        diachi: {type: String, required: false}
    },
    {
        collection: 'tai_khoan'
    }
)

var quanlyschema = new db.mongoose.Schema(
    {
        username: {type: String, required: true},
        pass: {type: String, required: true}
    }
)

let nhanvienmd = db.mongoose.model('nhanvienmd', nhanvienschema);
let quanlymd = db.mongoose.model('quanlymd', quanlyschema);

module.exports = {nhanvienmd, quanlymd}