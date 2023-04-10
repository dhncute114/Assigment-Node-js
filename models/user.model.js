var db = require('./db');

var userschaema = new db.mongoose.Schema(
    {
        username: {type: String, required: true},
        pass: {type: String, required: true},
        email: {type: String, required: true},
        sdt: {type: String, required: true},
        role: {type: String, required: false}
    },
    {
        collection: 'tai_khoan'
    }
)

let usermd = db.mongoose.model('usermd', userschaema);

module.exports = {usermd}