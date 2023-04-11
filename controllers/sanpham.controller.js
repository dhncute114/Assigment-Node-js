var mydb = require('../models/sanpham.model');

exports.sanpham = async (req, res, next) => {
    let filter = {};
    if (typeof (req.query.tensp) !== 'undefined') {
        filter.tensp = new RegExp(req.query.tensp, "i");
    }
    if (typeof (req.query.id_theloai) !== 'undefined') {
        filter.id_theloai = req.query.id_theloai;
    }
    var list = await mydb.spModel.find(filter).populate('id_theloai');
    var listl = await mydb.tlModel.find()

    res.render('sanpham/sanpham', { listsp: list, listtl: listl });
}


exports.ctsp = async (req, res, next) => {
    let idsp = req.params.idsp;
    let sp = await mydb.spModel.findById(idsp).populate('id_theloai');

    res.render('sanpham/chitietsp', { sp: sp });
}

exports.addtheloai = async (req, res, next) => {
    let msg = '';
    if (req.method == 'POST') {
        let objTheLoai = new mydb.tlModel();
        objTheLoai.theloai = req.body.theloai;

        try {
            let new_theLoai = await objTheLoai.save();
            msg = 'Thêm thể loại thành công';
        } catch (error) {
            msg = 'Lỗi: ' + error.message;
            console.log(error);
        }
    }

    res.redirect('/sanpham');
}

exports.formaddsp = async (req, res, next) => {

    let msg = '';

    var listtl = await mydb.tlModel.find();

    if (req.method == 'POST') {
        let objSP = new mydb.spModel();

        objSP.tensp = req.body.tensp;
        objSP.id_theloai = req.body.theloai;
        objSP.image = req.body.image;
        objSP.mota = req.body.mota;
        objSP.gia = req.body.gia;

        try {
            let new_sp = await objSP.save();
            msg = 'them thanh cong';
        } catch (error) {
            msg = 'loi' + error.message;
            console.log(error);
        }
    }

    res.render('sanpham/themsanpham', { listtl: listtl, msg: msg })
}

exports.suasp = async (req, res, next) => {
    var listtl = await mydb.tlModel.find();

    let idsp = req.params.idsp;
    let objsp = await mydb.spModel.findById(idsp);

    if (req.method == 'POST') {
        objsp.tensp = req.body.tensp;
        objsp.id_theloai = req.body.theloai;
        objsp.image = req.body.image;
        objsp.mota = req.body.mota;
        objsp.gia = req.body.gia;

        try {
            await mydb.spModel.findByIdAndUpdate({ _id: idsp }, objsp)
            msg = 'sua thanh cong';
        } catch (error) {
            msg = 'loi' + error.message;
            console.log(error);
        }
    }

    res.render('sanpham/suasanpham', { listtl: listtl, objsp: objsp });
}


exports.xoasp = async (req, res, next) => {
    let id = req.params.idsp;

    try {
        await mydb.spModel.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
    res.redirect('/sanpham')
}