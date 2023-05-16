var express = require('express');
var router = express.Router();
var multer = require('multer');
var uploader = multer({dest: './tmp'});
var sanphamcontroller = require('../controllers/sanpham.controller');


router.use((req, res, next) => {
    if (req.session.userlogin) {
        next();
    } else {
        res.redirect('/');
    }
});

//hien thi sanh sach sanpham
router.get('/', sanphamcontroller.sanpham)

router.post('/', sanphamcontroller.addtheloai)

router.get('/addsp', sanphamcontroller.formaddsp)
router.post('/addsp',uploader.single("image"), sanphamcontroller.formaddsp)

router.get('/suasp/:idsp', sanphamcontroller.suasp);
router.post('/suasp/:idsp', sanphamcontroller.suasp);

router.delete('/xoasp/:idsp', sanphamcontroller.xoasp);
router.get('/xoasp/:idsp', sanphamcontroller.xoasp);

router.get('/chitietsp/:idsp', sanphamcontroller.ctsp);




module.exports = router;