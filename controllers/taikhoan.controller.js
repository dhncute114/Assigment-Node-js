var md = require('../models/user.model')

exports.login = async (req, res, next) => {
    let msg = '';

    if (req.method == 'POST') {
        try {
            let obju = await md.usermd.findOne({ username: req.body.username });
            console.log(obju);

            if (obju != null) {
                if (obju.pass == req.body.pass) {
                    req.session.userlogin = obju;
                    return res.redirect('/sanpham');
                } else {
                    msg = 'Mật khẩu sai';
                }
            } else {
                msg = 'Username ' + req.body.username + ' không tồn tại';
            }
        } catch (error) {
            msg = error.message;
        }
    }
    

    res.render('users/dangnhap', { msg: msg })
}
exports.loginU = async (req, res, next) => {
    let msg = '';

    if (req.method == 'POST') {
        try {
            let obju = await md.usermd.findOne({ username: req.body.username });
            console.log(obju);

            if (obju != null) {
                if (obju.pass == req.body.pass) {
                    req.session.userlogin = obju;
                    return res.redirect('/sanpham');
                } else {
                    msg = 'Mật khẩu sai';
                }
            } else {
                msg = 'Username ' + req.body.username + ' không tồn tại';
            }
        } catch (error) {
            msg = error.message;
        }
    }
    

    res.render('users/dangnhapUser', { msg: msg })
}

exports.reg = async (req, res, next) => {
    let msg = '';

    if (req.method == 'POST') {
        console.log(req.body);

        if (req.body.pass != req.body.repass) {
            msg = 'Mật khẩu không khớp';
            res.render('users/dangki', { msg: msg });
        } else {
            let obju = await md.usermd.findOne({ username: req.body.username });
            if (obju != null) {
                msg = 'Username đã tồn tại';
                return res.render('users/dangki', { msg: msg });
            } else {
                obju = new md.usermd({
                    username: req.body.username,
                    pass: req.body.pass,
                    email: req.body.email,
                    sdt: req.body.sdt
                });
                try {
                    await obju.save();
                    return res.redirect('/');
                } catch (error) {
                    msg = error.message;
                }
            }
        }
    }
    res.render('users/dangki', { msg: msg })
}

var fs = require('fs');
exports.demoupload = async (req, res, next) => {
    let msg = '';
    if (req.method = 'POST') {
        console.log(req.file, req.body);
        try {
            fs.renameSync(req.file.path, './public/uploads/' + req.file.originalname);
            msg = 'Url anh: http://localhost:3000/uploads/'+req.file.originalname;
        } catch (error) {
            error = msg.message;
        }
    }
    res.render('users/upload', {msg: msg})
}


