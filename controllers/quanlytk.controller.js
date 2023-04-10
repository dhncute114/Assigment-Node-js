var md = require('../models/user.model')

exports.dstaikhoan = async (req, res, next) => {

    let filter = {};
    if (typeof(req.query.uername) !== 'undefined') {
        filter.username = req.query.tensp;
    }
    var list = await md.usermd.find(filter).sort({username: 1});
    res.render('users/danhsachtk', { listtk: list });
}

exports.suatk = async (req, res, next) => {
    let idtk = req.params.idtk;
    let objtk = await md.usermd.findById(idtk);

    if (req.method == 'POST') {
        let objTk = new md.usermd();

        objTk.username = req.body.username;
        objTk.pass = req.body.pass;
        objTk.email = req.body.email;
        objTk.sdt = req.body.sdt;

        objTk._id = idtk;

        try {
            await md.usermd.findByIdAndUpdate({ _id: idtk }, objTk)
            msg = 'sua thanh cong';
            console.log(objTk)
        } catch (error) {
            msg = 'loi' + error.message;
            console.log(error);
        }
    }
    res.render('users/suauser', {objtk: objtk})
}

exports.xoatk = async (req, res, next) => {
    let id = req.params.idtk;

    try {
        await md.usermd.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
    res.redirect('/taikhoan')
}