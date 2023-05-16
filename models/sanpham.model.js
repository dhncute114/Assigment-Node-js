const { Schema, model, default: mongoose } = require("mongoose");
var db = require('./db');

const spChema = new db.mongoose.Schema(
    {
        tensp: { type: String, required: true },
        id_theloai: { type: db.mongoose.Schema.Types.ObjectID, ref: 'tlModel' },
        image: { type: Object, required: true },
        mota: { type: String, required: false },
        soluong: { type: Number, required: true},
        gia: { type: Number, required: true }
    },
    { collection: 'san_pham' }
);

const hoadonSchema = new mongoose.Schema (
    {
        id_tensp: {type: db.mongoose.Schema.Types.ObjectID, ref: 'spChema'},
        id_image: {type: db.mongoose.Schema.Types.ObjectID, ref: 'spChema'},
        id_gia: {type: db.mongoose.Schema.Types.ObjectID, ref: 'spChema'},
        id_soluong: {type: db.mongoose.Schema.Types.ObjectID, ref: 'spChema'},
        tenkh: { type: String, required: true},
        sdtkh: {type: String, required: true},
        diachikh: {type: Object, required: true},
        ngaymua: {type: String, required: true},
        tongtien: {type: Number, required: true}
    }
)

const theloaiChema = new db.mongoose.Schema(
    {
        theloai: { type: String, required: true }
    },
    { collection: 'the_loai'}
);

let spModel = db.mongoose.model('spModel', spChema);
let tlModel = db.mongoose.model('tlModel', theloaiChema);
let hdmd = db.mongoose.model('hdmd', hoadonSchema)

module.exports = { spModel, tlModel, hdmd };
