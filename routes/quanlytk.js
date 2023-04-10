var express = require('express');
var router = express.Router();
var qltkRouter = require('../controllers/quanlytk.controller')

router.use((req, res, next) => {
    if (req.session.userlogin) {
        next();
    } else {
        res.redirect('/');
    }
});

router.get('/', qltkRouter.dstaikhoan)

router.get('/suatk/:idtk', qltkRouter.suatk)
router.post('/suatk/:idtk', qltkRouter.suatk)

router.get('/xoatk/:idtk', qltkRouter.xoatk)
router.post('/xoatk/:idtk', qltkRouter.xoatk)


module.exports = router;