var md = require('../../models/user.model');

var objreturn = {
    status: 1,
    msg: 'ok'
}

var dulieu = [
    { username: 'nam', pass: '123', email: 'nam@gmail.com', sdt: 9325934345 },
    { username: 'dsf', pass: '43', email: 'nam@gmail.com', sdt: 657657657567 }
]

exports.list = async (req, res, next) => {
    let listuser = [];
    try {
        listuser = await md.usermd.find();
        if (listuser) {
            objreturn.data = listuser;
            objreturn.status = 1;
            objreturn.msg = 'ok';
        } else {
            objreturn.status = 0;
            objreturn.msg = 'ko ok'
        }
    } catch (error) {
        objreturn.status = 0;
        objreturn.msg = error.msg;
    }
    res.json(objreturn)
}

exports.add = async (req, res, next) => {
    let dulieu = { username: 'nam', pass: '123', email: 'nam@gmail.com', sdt: 9325934345 },
        
    listuser = new md.usermd();
    try {
        listuser.username = dulieu.username;
        listuser.pass = dulieu.pass;
        listuser.email = dulieu.email;
        await listuser.save();
        objreturn.msg = 'them ok'
    } catch (error) {
        objreturn.status = 0;
        objreturn.msg = error.msg;
    }
    res.json(objreturn)
}

exports.update = (req, res, next) => {
    res.json(objreturn)
}