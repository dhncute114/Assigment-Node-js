const { Schema, model } = require("mongoose");
var db = require('./db');

const spChema = new db.mongoose.Schema(
    {
        tensp: { type: String, required: true },
        id_theloai: { type: db.mongoose.Schema.Types.ObjectID, ref: 'tlModel' },
        image: { type: Object, required: true },
        mota: { type: String, required: false },
        gia: { type: Number, required: true }
    },
    { collection: 'san_pham' }
);

const theloaiChema = new db.mongoose.Schema(
    {
        theloai: { type: String, required: true }
    },
    { collection: 'the_loai'}
);

let spModel = db.mongoose.model('spModel', spChema);
let tlModel = db.mongoose.model('tlModel', theloaiChema);

module.exports = { spModel, tlModel };
