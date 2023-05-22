var express = require('express');
var router = express.Router();
var taikhoancontroller = require('../controllers/taikhoan.controller');
var multer = require('multer');
var uploader = multer({dest: './tmp'});

// hien thi giao dien dang nhap
router.get('/', taikhoancontroller.login);
router.post('/', taikhoancontroller.login);

router.get('/loginU', taikhoancontroller.loginU);
router.post('/loginU', taikhoancontroller.loginU);

router.get('/dangki', taikhoancontroller.reg);
router.post('/dangki', taikhoancontroller.reg);


router.get('/demoupload', taikhoancontroller.demoupload);
router.post('/demoupload', uploader.single('file-anh'), taikhoancontroller.demoupload);

module.exports = router;
